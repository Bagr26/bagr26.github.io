/**
 * @type {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}[]}
 */
export const futureMetroLines = [
  {
    lineName: "D",
    lineColour: "DARKBLUE",
    endStations: ["Náměstí Míru", "Depo Písnice"],
    routes: [[0, 1]],
    stationsForward: [
      [
        "Náměstí Míru",
        "Náměstí Bratří Synků",
        "Pankrác",
        "Olbrachtova",
        "Nádraží Krč",
        "Nemocnice Krč",
        "Nové Dvory",
        "Libuš",
        "Písnice",
        "Depo Písnice",
      ],
    ],
    stationsBackward: [
      [
        "Depo Písnice",
        "Písnice",
        "Libuš",
        "Nové Dvory",
        "Nemocnice Krč",
        "Nádraží Krč",
        "Olbrachtova",
        "Pankrác",
        "Náměstí Bratří Synků",
        "Náměstí Míru",
      ],
    ],
  },
];
