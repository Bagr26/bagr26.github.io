console.log("Hello");

const testArray = ["one", "two", "three", "four", "five"];
const metroLines = [
  { line: "A", endStations: ["Nemocnice Motol", "Skalka", "Depo Hostivar"] },
  { line: "B", endStations: ["Zlicin", "Cerny most"] },
  { line: "C", endStations: ["Haje", "Letnany"] },
];

const string1 = document.getElementById("string1");
const input1 = document.getElementById("input1");
const reset = document.getElementById("reset");

input1.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    chooseAction(input1, input1.value);
    input1.value = "";
  }
});

reset.addEventListener("click", () => {
  input1.disabled = false;
  string1.textContent = "Choose line";
  chosenLine = null;
  chosenEndStations = null;
});

let chosenLine = null;
let chosenEndStations = null;

function chooseAction(input, value) {
  if (!chosenLine) {
    checkForLine(value);
    string1.textContent = `Chosen Line: ${chosenLine}, Enter an end station`;
    return;
  }
  checkForEndStations(input, value);
}

function checkForLine(value) {
  if (metroLines.find((e) => e.line == value)) {
    chosenLine = value;
    metroLines.find((e) => {
      if (e.line == chosenLine) chosenEndStations = e.endStations;
    });
    console.log(chosenEndStations);
    console.log(chosenLine);
  }
}

function checkForEndStations(input, value) {
  if (chosenEndStations.includes(value)) {
    string1.textContent = `Chosen end station: ${value}`;
    input.disabled = true;
    return;
  }
  console.log("wrong");
}
