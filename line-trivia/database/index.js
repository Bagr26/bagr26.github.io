import { linesDB } from "../database/linesDB.js";

const stringLinesDB = document.getElementById("stringLinesDB");

let str = JSON.stringify(linesDB).replace(/,/g, ",<br>").replace(/<br>1/g, "1").replace(/<br>2/g, "2").replace(/<br>3/g, "3");

stringLinesDB.innerHTML = "<p>" + str + "</p>";

//setTimeout(() => (stringLinesDB = str), 0);
