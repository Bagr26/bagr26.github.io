console.log("Welcome to version 0.4");

import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

import { linesDB } from "../database/linesDB.js";

import checkforAnswers from "./functions/checkForAnswers.js";

const userInput = document.getElementById("user-input");
const enterBtn = document.getElementById("enter-btn");
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");
const chooseBtn = document.getElementById("choose-btn");

const metroLinesCB = document.getElementById("metro-lines-cb");
const fMetroLinesCB = document.getElementById("f-metro-lines-cb");
const dTramLinesCB = document.getElementById("d-tram-lines-cb");

const instructions = document.getElementById("instructions");
const guessedNo = document.getElementById("guessedNo");
const chosenView = document.getElementById("chosen-view");
const enteredView = document.getElementById("entered-view");

let answersArr = [];

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
// NO DONT WRITE MORE CODE SMH FR
