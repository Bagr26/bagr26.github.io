console.log("Welcome to version 0.4");

import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

import { linesDB } from "../database/linesDB.js";

import { checkforAnswers, randomInt, genStationDiv, genLineRoute, convLineTypeID, convLineTypeName } from "./functions.js";

const userInput = document.getElementById("user-input");
const enterButton = document.getElementById("enter-btn");
const rollButton = document.getElementById("roll-btn");
const hintButton = document.getElementById("hint-btn");

const instructions = document.getElementById("instructions");
const answersView = document.getElementById("answers-view");

let currentLineIndex = 0;
let currentLine = {};
let lineRoute = null;
let remainingStations = [];
let lastIndex = -1;

let idLineTypeName = "";
let idLineType = -1;
let idLineIndex = -1;
let idLineRoute = -1;
let idLineDirection = -1;

const LINE_TYPES = 11; //number of line types, if changing add cases
const GAMEMODE = 2; //currently hard-set gamemode

function rollFunction() {
  if (userInput.value[0] === "-") {
    let setLineCode = userInput.value;

    let lineTypeID = /-t\d\d?/.exec(setLineCode);
    if (lineTypeID) lineTypeID = Number(lineTypeID[0].substring(2));

    let lineIndex = /-i\d\d?\d?/.exec(setLineCode);
    if (lineIndex) lineIndex = Number(lineIndex[0].substring(2));

    let routeNo = /-r\d\d?/.exec(setLineCode);
    if (routeNo) routeNo = Number(routeNo[0].substring(2));

    let direction = /-d(0|1)/.exec(setLineCode);
    if (direction) direction = Number(direction[0].substring(2));

    let lineTypeName = convLineTypeID(lineTypeID, LINE_TYPES);

    if (lineIndex !== 0 && !lineIndex) lineIndex = randomInt(0, linesDB[lineTypeName].length - 1);
    else if (lineIndex > linesDB[lineTypeName].length - 1) lineIndex = linesDB[lineTypeName].length - 1;

    idLineTypeName = lineTypeName;
    idLineType = lineTypeID;
    idLineIndex = lineIndex;

    currentLine = linesDB[lineTypeName][lineIndex];

    console.log(currentLine);
    lineRoute = genLineRoute(currentLine, routeNo, direction);
  } else {
    let selectedLinesVal = Array.from(document.querySelectorAll(".choose-btn:checked"), ({ value }) => value);
    if (selectedLinesVal.length === 0) return;
    let numberOfRollLines = 0;
    selectedLinesVal.forEach((lineVal) => {
      numberOfRollLines += linesDB[lineVal].length;
    });
    currentLineIndex = randomInt(1, numberOfRollLines, currentLineIndex);
    let relativeIndex = currentLineIndex;
    let lastPositiveIndex = currentLineIndex;

    selectedLinesVal.forEach((lineVal) => {
      if (linesDB[lineVal].length >= relativeIndex && relativeIndex >= 1) {
        currentLine = linesDB[lineVal][lastPositiveIndex - 1];
        idLineTypeName = lineVal;
      }
      relativeIndex = relativeIndex - linesDB[lineVal].length;
      if (relativeIndex >= 1) lastPositiveIndex = relativeIndex;
    });

    console.log(currentLine);
    lineRoute = genLineRoute(currentLine);

    idLineIndex = lastPositiveIndex - 1;
  }
  answersView.innerHTML = genStationDiv(lineRoute.stations);
  instructions.textContent = `Line: ${currentLine.lineName}, ${lineRoute.endStations[0]} - ${lineRoute.endStations[1]}`;

  remainingStations = lineRoute.stations;
  hintButton.disabled = false;
  lastIndex = -1;

  idLineRoute = lineRoute.routeNo;
  idLineDirection = lineRoute.direction;
}

rollButton.addEventListener("click", () => {
  rollFunction();
});

function enterFunction() {
  if (!lineRoute) return;
  if (remainingStations.length === 0) remainingStations = lineRoute.stations;
  let input = userInput.value.trimEnd();
  let hasAnswer = checkforAnswers(input, remainingStations, GAMEMODE); //gamemodes will be worked on later
  if (hasAnswer) {
    let stationIndex = _.indexOf(lineRoute.stations, input);
    lastIndex = stationIndex;
    document.getElementById(`st${stationIndex}p`).textContent = lineRoute.stations[stationIndex];
    remainingStations = _.without(remainingStations, input);
    userInput.value = "";
    if (remainingStations.length === 0) {
      instructions.textContent = "Congrats!";
      lineRoute = null;
      lastIndex = -1;
      hintButton.disabled = true;
    }
  }
}

function clearInput() {
  userInput.value = "";
}

function genSetID() {
  let setID = "";

  if (idLineType === -1) idLineType = convLineTypeName(idLineTypeName);

  setID = `-t${idLineType}-i${idLineIndex}-r${idLineRoute}-d${idLineDirection}`;
  console.log(setID);

  userInput.value = setID;
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") enterFunction();
  if (e.altKey && e.key === "r") rollFunction();
  if (e.altKey && e.key === "h") hintFunction();
  if (e.altKey && e.key === "c") clearInput();
  if (e.altKey && e.key === "g") genSetID();
});

enterButton.addEventListener("click", () => {
  enterFunction();
});

function hintFunction() {
  if (!lineRoute) return;
  if (remainingStations.length === 0) return;
  let hintStation = lineRoute.stations[lastIndex + 1];
  document.getElementById(`st${lastIndex + 1}p`).textContent =
    hintStation
      .split(/\s/)
      .map((word) => word.charAt(0))
      .join("... ") + "...";
}

hintButton.addEventListener("click", () => {
  hintFunction();
});

// NO DONT WRITE MORE CODE SMH FR
