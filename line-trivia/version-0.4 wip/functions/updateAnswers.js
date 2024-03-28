// Removes guessed value from answer array

import underscore from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

/**
 *
 * @param {string} input
 * @param {string[]} answersArr
 */
export default function updateAnswers(input, answersArr) {
  return underscore.without(answersArr, input);
}
