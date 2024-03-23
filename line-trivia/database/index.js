import { linesDB } from "../database/linesDB.js";

const url = new URL(window.location);
const urlParams = url.searchParams;
const lineNo = urlParams.get("line");
const stationNo = urlParams.get("station");

const nextLiBtn = document.getElementById("nextLine");
const prevLiBtn = document.getElementById("prevLine");

const nextStBtn = document.getElementById("nextSt");
const prevStBtn = document.getElementById("prevSt");

let tramLines = linesDB.tramLinesDay;

if (!lineNo || lineNo < 1) {
  urlParams.set("line", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

if (lineNo > tramLines.length) {
  urlParams.set("line", tramLines.length);
  urlParams.set("station", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

let line = tramLines[lineNo - 1];
let stations = line.stations;

if (!stationNo || stationNo < 1) {
  urlParams.set("station", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

if (stationNo > stations.length) {
  urlParams.set("station", stations.length);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

let station = stations[stationNo - 1];

console.log(`Line: ${lineNo}`);
console.log(`End stations: ${line.endStations}`);
console.log(`Number of stations: ${stations.length}`);
console.log(`Station: ${station}`);

nextLiBtn.addEventListener("click", () => {
  urlParams.set("line", Number(lineNo) + 1);
  urlParams.set("station", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});

prevLiBtn.addEventListener("click", () => {
  urlParams.set("line", Number(lineNo) - 1);
  urlParams.set("station", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});

nextStBtn.addEventListener("click", () => {
  urlParams.set("station", Number(stationNo) + 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});

prevStBtn.addEventListener("click", () => {
  urlParams.set("station", Number(stationNo) - 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
});

/*const stringLinesDB = document.getElementById("stringLinesDB");

let str = JSON.stringify(linesDB).replace(/,/g, ",<br>").replace(/<br>1/g, "1").replace(/<br>2/g, "2").replace(/<br>3/g, "3");

stringLinesDB.innerHTML = "<p>" + str + "</p>";

//setTimeout(() => (stringLinesDB = str), 0);*/
