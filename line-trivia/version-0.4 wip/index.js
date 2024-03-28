console.log("Welcome to version 0.4");

import { linesDB } from "../database/linesDB";

import checkforAnswers from "./functions/checkForAnswers";

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

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkforAnswers(["Háje", "Letňany"], 0, userInput.textContent);
  }
});
// NO DONT WRITE MORE CODE SMH
