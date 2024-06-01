//import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js"

const rollButton = document.getElementById("roll-btn");

rollButton.addEventListener("click", () => {
  let selectedLinesVal = Array.from(document.querySelectorAll(".choose-btn:checked"), ({ value }) => value);
  console.log(convValtoType(selectedLinesVal));
});

/**
 * @param {number[]} arr
 * @returns {string[]}
 */
function convValtoType(arr) {
  let returnArr = [];
  if (arr.includes(1)) {
    returnArr.push("metroLines");
  }
  if (arr.includes(2)) {
    returnArr.push("futureMetroLines");
  }
  if (arr.includes(3)) {
    returnArr.push("tramLinesDay");
  }
  if (arr.includes(4)) {
    returnArr.push("tramLinesSpecial");
  }
  if (arr.includes(5)) {
    returnArr.push("tramLinesNight");
  }
  if (arr.includes(6)) {
    returnArr.push("trolleybusLinesDay");
  }
  if (arr.includes(7)) {
    returnArr.push("busLinesDay");
  }
  if (arr.includes(8)) {
    returnArr.push("busLinesNight");
  }
  if (arr.includes(9)) {
    returnArr.push("rBusLinesDay");
  }
  if (arr.includes(10)) {
    returnArr.push("rBusLinesNight");
  }
  if (arr.includes(11)) {
    returnArr.push("formerLines");
  }
  return returnArr;
}
