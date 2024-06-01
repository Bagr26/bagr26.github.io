const metroLines = [
  {
    lineName: "A",
    endStations: ["Nemocnice Motol", "Skalka", "Depo Hostivař"],
    routes: [
      [0, 1],
      [0, 2],
    ],
    routeExceptions: [
      { both: ["Depo Hostivař"], pos: [], neg: [] },
      { both: [], pos: [], neg: [] },
    ],
    stations: [
      "Nemocnice Motol",
      "Petřiny",
      "Nádraží Veleslavín",
      "Bořislavka",
      "Dejvická",
      "Hradčanská",
      "Malostranská",
      "Staroměstská",
      "Můstek",
      "Muzeum",
      "Náměstí Míru",
      "Jiřího z Poděbrad",
      "Flora",
      "Želivského",
      "Strašnická",
      "Skalka",
      "Depo Hostivař",
    ],
  },
  {
    lineName: "B",
    endStations: ["Zličín", "Černý Most"],
    routes: [[0, 1]],
    routeExceptions: [{ both: [], pos: [], neg: [] }],
    stations: [
      "Zličín",
      "Stodůlky",
      "Luka",
      "Lužiny",
      "Hůrka",
      "Nové Butovice",
      "Jinonice",
      "Radlická",
      "Smíchovské nádraží",
      "Anděl",
      "Karlovo náměstí",
      "Národní třída",
      "Můstek",
      "Náměstí Republiky",
      "Florenc",
      "Křižíkova",
      "Invalidovna",
      "Palmovka",
      "Českomoravská",
      "Vysočanská",
      "Kolbenova",
      "Hloubětín",
      "Rajská zahrada",
      "Černý Most",
    ],
  },
  {
    lineName: "C",
    endStations: ["Letňany", "Háje"],
    routes: [[0, 1]],
    routeExceptions: [{ both: [], pos: [], neg: [] }],
    stations: [
      "Letňany",
      "Prosek",
      "Střížkov",
      "Ládví",
      "Kobylisy",
      "Nádraží Holešovice",
      "Vltavská",
      "Florenc",
      "Hlavní nádraží",
      "Muzeum",
      "I. P. Pavlova",
      "Vyšehrad",
      "Pražského povstání",
      "Pankrác",
      "Budějovická",
      "Kačerov",
      "Roztyly",
      "Chodov",
      "Opatov",
      "Háje",
    ],
  },
];
const url = new URL(window.location);
const urlParams = url.searchParams;
const lineNo = urlParams.get("line");
const stationNo = urlParams.get("station");

const view = document.getElementById("view");

const nextLiBtn = document.getElementById("nextLine");
const prevLiBtn = document.getElementById("prevLine");

const nextStBtn = document.getElementById("nextSt");
const prevStBtn = document.getElementById("prevSt");

if (!lineNo || lineNo < 1) {
  urlParams.set("line", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

if (lineNo > metroLines.length) {
  urlParams.set("line", metroLines.length);
  urlParams.set("station", 1);
  url.search = urlParams.toString();
  window.location.replace(url.toString());
}

let line = metroLines[lineNo - 1];
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
    stDivContent += `<div id="st${num}" style="height:18px; width:150px; margin:1px; display:flex;"><img src="../pictures/${type}Station.png"><p style="margin:0; padding:0">${st}</p></div>\n`;
    num++;
  });
  return stDivContent;
}

view.innerHTML = genStDiv(stations);

document.getElementById(`st${stationNo - 1}`).classList.add("bold-text");
