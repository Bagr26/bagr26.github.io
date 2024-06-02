console.log("Welcome to version 0.4");

import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

import { linesDB } from "../database/linesDB.js";

import { checkforAnswers, randomInt, genStationDiv, genLineRoute } from "./functions.js";

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
let gameEndCheck = false;
let lastIndex = -1;

rollButton.addEventListener("click", () => {
  userInput.disabled = false;
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
    if (linesDB[lineVal].length >= relativeIndex && relativeIndex >= 1) currentLine = linesDB[lineVal][lastPositiveIndex - 1];
    relativeIndex = relativeIndex - linesDB[lineVal].length;
    if (relativeIndex >= 1) lastPositiveIndex = relativeIndex;
  });

  console.log(currentLine);
  lineRoute = genLineRoute(currentLine);
  answersView.innerHTML = genStationDiv(lineRoute.stations);
  instructions.textContent = `Line: ${currentLine.lineName}, ${lineRoute.endStations[0]} - ${lineRoute.endStations[1]}`;

  remainingStations = lineRoute.stations;
  hintButton.disabled = false;
  lastIndex = -1;
});

function enterFunction() {
  if (!lineRoute) return;
  if (remainingStations.length === 0) remainingStations = lineRoute.stations;
  let hasAnswer = checkforAnswers(userInput.value, remainingStations, 2); //gamemodes will be worked on later
  if (hasAnswer) {
    let stationIndex = _.indexOf(lineRoute.stations, userInput.value);
    lastIndex = stationIndex;
    document.getElementById(`st${stationIndex}p`).textContent = lineRoute.stations[stationIndex];
    remainingStations = _.without(remainingStations, userInput.value);
    userInput.value = "";
    if (remainingStations.length === 0) {
      instructions.textContent = "Congrats!";
      lineRoute = null;
      lastIndex = -1;
      userInput.disabled = true;
      hintButton.disabled = true;
    }
  }
}

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    enterFunction();
  }
});

enterButton.addEventListener("click", () => {
  enterFunction();
});

hintButton.addEventListener("click", () => {
  if (!lineRoute) return;
  if (remainingStations.length === 0) return;
  let hintStation = lineRoute.stations[lastIndex + 1];
  document.getElementById(`st${lastIndex + 1}p`).textContent =
    hintStation
      .split(/\s/)
      .map((word) => word.charAt(0))
      .join("... ") + "...";
});

// NO DONT WRITE MORE CODE SMH FR