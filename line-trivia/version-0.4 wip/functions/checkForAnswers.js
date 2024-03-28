// checkForAnswers fc

// gamemodes:
// 0 - all end stations
// 1 - all stations
// 2 - stations in order

import updateAnswers from "./updateAnswers";

/**
 *
 * @param {string[]} answersArr
 * @param {number} gamemode
 * @param {string} input
 */
export default function checkforAnswers(input, answersArr, gamemode) {
  if (answersArr.length === 0) return;
  if (gamemode === 0 || gamemode === 1) {
    if (answersArr.includes(input)) updateAnswers(input, answersArr);
  }
  if (gamemode === 2) {
  }
}
