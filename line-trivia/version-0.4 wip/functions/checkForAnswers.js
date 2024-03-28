// checkForAnswers fc

// gamemodes:
// 0 - all end stations
// 1 - all stations
// 2 - stations in order

/**
 *
 * @param {string[]} answersArr
 * @param {number} gamemode
 * @param {string} input
 */
export default function checkforAnswers(input, answersArr, gamemode) {
  console.log(input);
  if (answersArr.length === 0) return;
  if (gamemode === 0 || gamemode === 1) {
    if (answersArr.includes(input)) return true;
  }
  if (gamemode === 2) {
  }
}
