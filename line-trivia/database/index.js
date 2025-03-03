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

let prevStation = stations[stationNo - 2];
let station = stations[stationNo - 1];
let nextStation = stations[stationNo];

console.log(`Line: ${lineNo}`);
console.log(`End stations: ${line.endStations}`);
console.log(`Number of stations: ${stations.length}`);
console.log(`Previous station: ${prevStation}`);
console.log(`Station: ${station}`);
console.log(`Next station: ${nextStation}`);

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

function genStDiv(sts) {
  let stDivContent = ``;
  let num = 0;
  sts.forEach((st) => {
    let type = "Mid";
    if (num == 0) {
      type = "Start";
    }
    if (num == sts.length - 1) {
      type = "End";
    }

    if (num == 0) console.log(st);
    stDivContent += `<div id="st${num}" style="height:18px; width:300px; margin:1px; display:flex;"><img src="../pictures/${type}Station.png"><p style="margin:0; padding:0">${st}</p></div>\n`;
    num++;
  });
  return stDivContent;
}

view.innerHTML = genStDiv(stations);

document.getElementById(`st${stationNo - 1}`).classList.add("bold-text");

/*const stringLinesDB = document.getElementById("stringLinesDB");

let str = JSON.stringify(linesDB).replace(/,/g, ",<br>").replace(/<br>1/g, "1").replace(/<br>2/g, "2").replace(/<br>3/g, "3");

stringLinesDB.innerHTML = "<p>" + str + "</p>";

//setTimeout(() => (stringLinesDB = str), 0);*/
