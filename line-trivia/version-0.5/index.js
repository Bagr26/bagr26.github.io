console.log("Welcome to version 0.5");

console.log("WIP");

/**
 * @typedef {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}} line
 * @typedef {line[]} lineList
 * @typedef {{busLines: lineList;formerLines: lineList;futureMetroLines: lineList;metroLines: lineList;nightTramLines: lineList;tramLines: lineList;trolleybusLines: lineList}} lineDB
 * @typedef {"GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE"} lineColour
 * @typedef {"metroLines"|"futureMetroLines"|"tramLines"|"specialTramLines"|"nightTramLines"|"trolleybusLines"|"busLines"|"nightBusLines"|"regionalBusLines"|"regionalNightBusLines"|"formerLines"} lineType
 */

import { lineDatabase } from "../newDatabase/lineDatabase.js";

const userInput = document.getElementById("user-input");
const enterButton = document.getElementById("enter-btn");
const rollButton = document.getElementById("roll-btn");
const hintButton = document.getElementById("hint-btn");

const instructions = document.getElementById("instructions");
const answersView = document.getElementById("answers-view");

// gamemodes:
// 0 - all end stations
// 1 - all stations
// 2 - stations in order
const GAMEMODE = 2;

/**
 * @type {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}}
 */
let currentLineRoute;

/**
 * @type {string[]}
 */
let remainingStations;

/**
 * @type {number}
 */
let currentStationIndex;

rollButton.addEventListener("click", () => {
  let selectedLineTypes = Array.from(document.querySelectorAll(".choose-btn:checked"), ({ value }) => value);

  currentLineRoute = rollFunction(userInput.value, lineDatabase, currentLineRoute, selectedLineTypes);
  if (!currentLineRoute) return;

  answersView.innerHTML = genStationDiv(currentLineRoute.stations, currentLineRoute.colour);
  instructions.textContent = `Line: ${currentLineRoute.name}, ${currentLineRoute.endStations[0]} - ${currentLineRoute.endStations[1]}`;

  remainingStations = currentLineRoute.stations;
  currentStationIndex = 0;
  hintButton.disabled = false;
});

enterButton.addEventListener("click", () => {
  if (!currentLineRoute) return;
  if (remainingStations.length === 0) currentLineRoute.stations;

  /**
   * @type {string}
   */
  let input = userInput.value.trimEnd();
  let correctAnswer = checkForAnswers(input, remainingStations, GAMEMODE);
  if (correctAnswer) {
    let stationIndex = currentLineRoute.stations.indexOf(input, currentStationIndex);
    document.getElementById(`st${stationIndex}p`).textContent = currentLineRoute.stations[stationIndex];
    remainingStations = remainingStations.slice(1);
    userInput.value = "";
    currentStationIndex++;
    if (remainingStations.length === 0) {
      instructions.textContent = "Congrats!";
      hintButton.disabled = true;
    }
  }
});

//TBA - a better hint system
hintButton.addEventListener("click", () => {
  if (!currentLineRoute) return;
  if (remainingStations.length === 0) return;
  let hintStation = currentLineRoute.stations[currentStationIndex];
  document.getElementById(`st${currentStationIndex}p`).textContent =
    hintStation
      .split(/\s/)
      .map((word) => word.charAt(0))
      .join("... ") + "...";
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") enterButton.click();
  if (e.altKey && e.key === "r") rollButton.click();
  if (e.altKey && e.key === "h") hintButton.click();
  if (e.altKey && e.key === "c") userInput.value = "";
  if (e.altKey && e.key === "g") userInput.value = genLineRouteID(currentLineRoute, lineDatabase);
});

/**
 *
 * @param {string} input
 * @param {string[]} answersArray
 */
function checkForAnswers(input, answersArray, gamemode) {
  if (answersArray.length === 0) return;
  if (gamemode === 0 || gamemode === 1) {
    if (answersArray.includes(input)) return true;
  }
  if (gamemode === 2) {
    if (answersArray[0] === input) return true;
  }
}

/**
 *
 * @param {string} input
 * @param {lineDB} lineDB
 * @param {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}} prevLineRoute
 * @param {string[]} selectedLineTypes
 * @returns {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}}
 */
function rollFunction(input, lineDB, prevLineRoute = null, selectedLineTypes = null) {
  const LINE_TYPES = 11;

  if (input.startsWith("-")) {
    let specialLineCode = input;

    /**
     * @type {number}
     */
    let lineTypeID;
    let lineTypeIDRegex = /-t\d\d?/.exec(specialLineCode);
    if (lineTypeIDRegex) {
      lineTypeID = Number(lineTypeIDRegex[0].substring(2));
    }

    /**
     * @type {number}
     */
    let lineIndex;
    let lineIndexRegex = /-i\d\d?\d?/.exec(specialLineCode);
    if (lineIndexRegex) {
      lineIndex = Number(lineIndexRegex[0].substring(2));
    }

    /**
     * @type {number}
     */
    let routeIndex;
    let routeIndexRegex = /-r\d\d?/.exec(specialLineCode);
    if (routeIndexRegex) {
      routeIndex = Number(routeIndexRegex[0].substring(2));
    }

    /**
     * @type {0|1}
     */
    let direction;
    let directionRegex = /-d(0|1)/.exec(specialLineCode);
    if (directionRegex) {
      direction = Number(directionRegex[0].substring(2));
    }

    let lineTypeName = lineTypeIDtoName(lineTypeID, LINE_TYPES);

    if (lineIndex !== 0 && !lineIndex) lineIndex = randomInt(0, lineDB[lineTypeName].length - 1);
    else if (lineIndex > lineDB[lineTypeName].length - 1) lineIndex = lineDB[lineTypeName].length - 1;

    /**
     * @type {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}}
     */
    let currentLine = lineDB[lineTypeName][lineIndex];

    let lineRoute = genLineRoute(currentLine, lineTypeName, routeIndex, direction);

    console.log(lineRoute);

    return lineRoute;
  }
  if (selectedLineTypes.length === 0) return;
  let selectedLinesAmount = 0;
  selectedLineTypes.forEach((lineType) => {
    selectedLinesAmount += lineDB[lineType].length;
  });

  let lineName = "";

  /**
   * @type {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}}
   */
  let currentLine;

  /**
   * @type {"metroLines"|"futureMetroLines"|"tramLines"|"specialTramLines"|"nightTramLines"|"trolleybusLines"|"busLines"|"nightBusLines"|"regionalBusLines"|"regionalNightBusLines"|"formerLines"}
   */
  let finalLineType;

  let prevLineName;
  if (!prevLineRoute) prevLineName = "";
  else prevLineName = prevLineRoute.name;

  while (!lineName || (lineName === prevLineName && selectedLinesAmount != 1)) {
    let selectedLinesIndex = randomInt(0, selectedLinesAmount - 1);

    //index number that is gradually made smaller
    let indexValue = selectedLinesIndex;
    //final index within a lineType array
    let lineIndex = selectedLinesIndex;

    selectedLineTypes.forEach((lineType) => {
      if (lineDB[lineType].length >= indexValue && indexValue >= 0) {
        currentLine = lineDB[lineType][lineIndex];
        finalLineType = lineType;
      }
      indexValue = indexValue - lineDB[lineType].length;
      if (indexValue >= 0) lineIndex = indexValue;
    });

    lineName = currentLine.lineName;
  }

  let lineRoute = genLineRoute(currentLine, finalLineType);

  console.log(lineRoute);

  return lineRoute;
}

/**
 *
 * @param {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}} line
 * @param {string} lineType
 * @param {number} routeIndex
 * @param {0|1} direction
 * @returns {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}}
 */
function genLineRoute(line, lineType, routeIndex = null, direction = null) {
  if ((routeIndex !== 0 && !routeIndex) || routeIndex > line.routes.length - 1) routeIndex = randomInt(0, line.routes.length - 1);
  if (direction !== 0 && !direction) direction = randomInt(0, 1);

  //console.log(line);

  //if loop or one-directional with wrong direction, switches the direction
  switch (direction) {
    case 0:
      if (line.stationsForward[routeIndex].length === 0) direction = 1;
      break;
    case 1:
      if (line.stationsBackward[routeIndex].length === 0) direction = 0;
  }

  let routeEndStIndex = line.routes[routeIndex];

  /**
   * @type {string[]}
   */
  let routeEndSt = [];

  routeEndStIndex.forEach((endStIndex) => {
    routeEndSt.push(line.endStations[endStIndex]);
  });

  if (direction === 1) routeEndSt.reverse();

  /**
   * @type {string[]}
   */
  let stations = [];

  //choooses correct station array
  switch (direction) {
    case 0:
      stations = line.stationsForward[routeIndex];
      break;
    case 1:
      stations = line.stationsBackward[routeIndex];
  }

  /**
   * @type {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}}
   */
  let lineRoute = {};

  return (lineRoute = {
    name: line.lineName,
    type: lineType,
    colour: line.lineColour,
    endStations: routeEndSt,
    stations: stations,
    routeIndex: routeIndex,
    direction: direction,
  });
}

/**
 *
 * @param {{name: string;type: lineType;colour: lineColour;endStations: string[];stations: string[];routeIndex: number;direction: 0|1}} lineRoute
 * @param {lineDB} lineDB
 * @returns {string}
 */
function genLineRouteID(lineRoute, lineDB) {
  if (!lineRoute) return "";
  let lineTypeID = lineTypeNametoID(lineRoute.type);

  lineDB[""];
  let lineIndex = lineDB[lineRoute.type].findIndex((line) => {
    return line.lineName === lineRoute.name;
  });

  let lineRouteID = `-t${lineTypeID}-i${lineIndex}-r${lineRoute.routeIndex}-d${lineRoute.direction}`;

  return lineRouteID;
}

/**
 *
 * @param {number} ltID
 * @param {number} ltNo
 * @returns {"metroLines"|"futureMetroLines"|"tramLines"|"specialTramLines"|"nightTramLines"|"trolleybusLines"|"busLines"|"nightBusLines"|"regionalBusLines"|"regionalNightBusLines"|"formerLines"}
 */
export function lineTypeIDtoName(ltID, ltNo) {
  if ((ltID !== 0 && !ltID) || ltID > ltNo - 1) ltID = randomInt(1, ltNo);
  /**
   * @type {"metroLines"|"futureMetroLines"|"tramLines"|"specialTramLines"|"nightTramLines"|"trolleybusLines"|"busLines"|"nightBusLines"|"regionalBusLines"|"regionalNightBusLines"|"formerLines"}
   */
  let ltName = "";
  switch (ltID) {
    case 0:
      ltName = "metroLines";
      break;

    case 1:
      ltName = "futureMetroLines";
      break;

    case 2:
      ltName = "tramLines";
      break;

    case 3:
      ltName = "specialTramLines";
      break;

    case 4:
      ltName = "nightTramLines";
      break;

    case 5:
      ltName = "trolleybusLines";
      break;

    case 6:
      ltName = "busLines";
      break;

    case 7:
      ltName = "nightBusLines";
      break;

    case 8:
      ltName = "regionalBusLines";
      break;

    case 9:
      ltName = "regionalNightBusLines";
      break;

    case 10:
      ltName = "formerLines";
      break;
  }
  return ltName;
}

/**
 *
 * @param {"metroLines"|"futureMetroLines"|"tramLines"|"specialTramLines"|"nightTramLines"|"trolleybusLines"|"busLines"|"nightBusLines"|"regionalBusLines"|"regionalNightBusLines"|"formerLines"} ltName
 * @returns {number}
 */
function lineTypeNametoID(ltName) {
  /**
   * @type {number}
   */
  let ltID;
  switch (ltName) {
    case "metroLines":
      ltID = 0;
      break;

    case "futureMetroLines":
      ltID = 1;
      break;

    case "tramLines":
      ltID = 2;
      break;

    case "specialTramLines":
      ltID = 3;
      break;

    case "nightTramLines":
      ltID = 4;
      break;

    case "trolleybusLines":
      ltID = 5;
      break;

    case "busLines":
      ltID = 6;
      break;

    case "nightBusLines":
      ltID = 7;
      break;

    case "regionalBusLines":
      ltID = 8;
      break;

    case "regionalNightBusLines":
      ltID = 9;
      break;

    case "formerLines":
      ltID = 10;
      break;
  }
  return ltID;
}

/**
 * @description generates a random integer between a minimal and maximum, can exclude a previous value
 * @param {number} min
 * @param {number} max
 * @param {number} prevNum
 * @returns {number}
 */
function randomInt(min, max, prevNum = null) {
  let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
  if (max > 1 && randomNo === prevNum) randomNo = randomInt(min, max, prevNum);
  return randomNo;
}

/**
 *
 * @param {string[]} stations
 * @param {"GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE"} colour
 * @returns {string}
 */
function genStationDiv(stations, colour) {
  colour = colour.toLowerCase();
  let stationDivContent = ``;
  let num = 0;
  stations.forEach((station) => {
    let type = "Mid";
    if (num == 0) {
      type = "Start";
    }
    if (num == stations.length - 1) {
      type = "End";
    }

    //if (num == 0) console.log(station);
    //margin:1px dont know why i put it there it might be needed
    stationDivContent += `<div id="st${num}" style="height:18px; width:300px; margin:0px; display:flex;"><img src="../pictures/${colour}/${type}Station${colour}.png"><p id="st${num}p" style="margin:0; padding:0"></p></div>\n`;
    num++;
  });
  return stationDivContent;
}
