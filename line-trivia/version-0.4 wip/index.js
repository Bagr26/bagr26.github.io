console.log("Welcome to version 0.4");

import { linesDB } from "/line-trivia/database/linesDB.js";

const url = new URL(window.location);
const urlParams = url.searchParams;
const lineNo = urlParams.get("line");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");

console.log(lineNo);

if (lineNo) console.log(linesDB.tramLinesDay[lineNo - 1].endStations);

addBtn.addEventListener("click", () => {
  urlParams.set("line", Number(lineNo) + 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});

subBtn.addEventListener("click", () => {
  urlParams.set("line", Number(lineNo) - 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});
