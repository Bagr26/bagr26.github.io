import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/underscore-esm-min.js";

// gamemodes:
// 0 - all end stations
// 1 - all stations
// 2 - stations in order

/**
 *
 * @param {string[]} answersArr
 * @param {number} gamemode
 * @param {string} input
 * @returns {boolean}
 */
export function checkforAnswers(input, answersArr, gamemode) {
  //console.log(input);
  if (answersArr.length === 0) return;
  if (gamemode === 0 || gamemode === 1) {
    if (answersArr.includes(input)) return true;
  }
  if (gamemode === 2) {
    if (answersArr[0] === input) return true;
  }
}

/**
 *
 * @param {number} min
 * @param {number} max
 * @param {number} prevNum
 * @returns {number}
 */
export function randomInt(min, max, prevNum) {
  let randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
  if (max > 1 && randomNo === prevNum) randomNo = randomInt(min, max, prevNum);
  return randomNo;
}

/**
 *
 * @param {string[]} stations
 * @returns {string}
 */
export function genStationDiv(stations) {
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
    stationDivContent += `<div id="st${num}" style="height:18px; width:300px; margin:1px; display:flex;"><img src="../pictures/${type}Station.png"><p id="st${num}p" style="margin:0; padding:0"></p></div>\n`;
    num++;
  });
  return stationDivContent;
}

/**
 *
 * @param {{lineName: string; endStations: string[]; routes: number[][]; routeExceptions: { both: string[]; pos: string[]; neg: string[] }[]; stations: string[]}} line
 * @param {number} routeNo
 * @param {number} direction
 * @returns {{stations: string[]; endStations: string[], routeNo: number, direction: number}}
 */
export function genLineRoute(line, routeNo, direction) {
  let stations = line.stations;

  if ((routeNo !== 0 && !routeNo) || routeNo > line.routes.length - 1) routeNo = randomInt(0, line.routes.length - 1);
  if (direction !== 0 && !direction) direction = randomInt(0, 1);

  let routeEndStNo = line.routes[routeNo];

  let routeEndSt = [];

  routeEndStNo.forEach((endStNo) => {
    routeEndSt.push(line.endStations[endStNo]);
  });

  if (direction === 1) routeEndSt.reverse();

  stations = _.difference(stations, line.routeExceptions[routeNo].both);

  stations = _.flatten(stations);

  if (direction === 0) stations = _.difference(stations, line.routeExceptions[routeNo].pos);
  if (direction === 1) {
    stations = _.difference(stations, line.routeExceptions[routeNo].neg);
    stations.reverse();
  }

  let lineRoute = {};

  return (lineRoute = { stations: stations, endStations: routeEndSt, routeNo: routeNo, direction: direction });
}

/**
 *
 * @param {number} ltID
 * @param {number} ltNo
 * @returns {string}
 */
export function convLineTypeID(ltID, ltNo) {
  if (ltID !== 0 && !ltID) ltID = randomInt(1, ltNo);
  let ltName = "";
  switch (ltID) {
    case 0:
      ltName = "metroLines";
      break;

    case 1:
      ltName = "futureMetroLines";
      break;

    case 2:
      ltName = "tramLinesDay";
      break;

    case 3:
      ltName = "tramLinesSpecial";
      break;

    case 4:
      ltName = "tramLinesNight";
      break;

    case 5:
      ltName = "trolleybusLinesDay";
      break;

    case 6:
      ltName = "busLinesDay";
      break;

    case 7:
      ltName = "busLinesNight";
      break;

    case 8:
      ltName = "rBusLinesDay";
      break;

    case 9:
      ltName = "rBusLinesNight";
      break;

    case 10:
      ltName = "formerLines";
      break;
  }
  return ltName;
}

/**
 *
 * @param {string} ltName
 * @returns {number}
 */
export function convLineTypeName(ltName) {
  let ltID = 0;
  switch (ltName) {
    case "metroLines":
      ltID = 0;
      break;

    case "futureMetroLines":
      ltID = 1;
      break;

    case "tramLinesDay":
      ltID = 2;
      break;

    case "tramLinesSpecial":
      ltID = 3;
      break;

    case "tramLinesNight":
      ltID = 4;
      break;

    case "trolleybusLinesDay":
      ltID = 5;
      break;

    case "busLinesDay":
      ltID = 6;
      break;

    case "busLinesNight":
      ltID = 7;
      break;

    case "rBusLinesDay":
      ltID = 8;
      break;

    case "rBusLinesNight":
      ltID = 9;
      break;

    case "formerLines":
      ltID = 10;
      break;
  }
  return ltID;
}
