console.log("Welcome to version 0.4");

import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

import { linesDB } from "../database/linesDB.js";

import { checkforAnswers, randomInt, genStationDiv, genLineRoute } from "./functions.js";

const userInput = document.getElementById("user-input");
const enterButton = document.getElementById("enter-btn");
const rollButton = document.getElementById("roll-btn");
const resetButton = document.getElementById("reset-btn");
const chooseButton = document.getElementById("choose-btn");

const metroLinesCB = document.getElementById("metro-lines-cb");
const fMetroLinesCB = document.getElementById("f-metro-lines-cb");
const dTramLinesCB = document.getElementById("d-tram-lines-cb");

const instructions = document.getElementById("instructions");
const guessedNo = document.getElementById("guessedNo");
const chosenView = document.getElementById("chosen-view");
const answersView = document.getElementById("answers-view");

let currentLineIndex = 0;
let currentLine = {};

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (answersArr.length === 0) answersArr = ["Háje", "Letňany"];
    let hasAnswer = checkforAnswers(userInput.value, answersArr, 0);
    if (hasAnswer) {
      answersArr = _.without(answersArr, userInput.value);
      userInput.value = "";
    }
    console.log(answersArr);
  }
});

rollButton.addEventListener("click", () => {
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
  let lineRoute = genLineRoute(currentLine);
  answersView.innerHTML = genStationDiv(lineRoute.stations);
  instructions.textContent = `Line: ${currentLine.lineName}, ${lineRoute.endStations[0]} - ${lineRoute.endStations[1]}`;
});

// NO DONT WRITE MORE CODE SMH FR
