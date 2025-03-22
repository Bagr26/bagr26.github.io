// 12/24

/**
 * @type {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}[]}
 */
export const trolleybusLines = [
  {
    lineName: "58",
    lineColour: "PURPLE",
    endStations: ["Palmovka", "Čakovice", "Miškovice"],
    routes: [
      [0, 1],
      [0, 2],
    ],
    stationsForward: [
      [
        "Palmovka",
        "Libeňský zámek",
        "Kundratka",
        "Kelerka",
        "Prosecká",
        "Prosek",
        "Nový Prosek",
        "Letňanská",
        "Letňany",
        "Výstaviště Letňany",
        "Dobratická",
        "Tupolevova",
        "Fryčovická",
        "Trutnovská",
        "Obchodní centrum Čakovice",
        "Za Avií",
        "Cukrovar Čakovice",
        "Nádraží Čakovice",
        "Koupaliště Čakovice",
        "Oderská",
        "Čakovice",
      ],
      [
        "Palmovka",
        "Libeňský zámek",
        "Kundratka",
        "Kelerka",
        "Prosecká",
        "Prosek",
        "Nový Prosek",
        "Letňanská",
        "Letňany",
        "Výstaviště Letňany",
        "Dobratická",
        "Tupolevova",
        "Fryčovická",
        "Trutnovská",
        "Obchodní centrum Čakovice",
        "Za Avií",
        "Cukrovar Čakovice",
        "Nádraží Čakovice",
        "Koupaliště Čakovice",
        "Oderská",
        "Čakovice",
        "Radonická",
        "Miškovice",
      ],
    ],
    stationsBackward: [
      [
        "Čakovice",
        "Oderská",
        "Koupaliště Čakovice",
        "Nádraží Čakovice",
        "Cukrovar Čakovice",
        "Za Avií",
        "Obchodní centrum Čakovice",
        "Trutnovská",
        "Fryčovická",
        "Tupolevova",
        "Dobratická",
        "Výstaviště Letňany",
        "Letňany",
        "Letňanská",
        "Nový Prosek",
        "Prosek",
        "Prosecká",
        "Kelerka",
        "Kundratka",
        "Palmovka",
      ],
      [
        "Miškovice",
        "Radonická",
        "Čakovice",
        "Oderská",
        "Koupaliště Čakovice",
        "Nádraží Čakovice",
        "Cukrovar Čakovice",
        "Za Avií",
        "Obchodní centrum Čakovice",
        "Trutnovská",
        "Fryčovická",
        "Tupolevova",
        "Dobratická",
        "Výstaviště Letňany",
        "Letňany",
        "Letňanská",
        "Nový Prosek",
        "Prosek",
        "Prosecká",
        "Kelerka",
        "Kundratka",
        "Palmovka",
      ],
    ],
  },
  {
    lineName: "59",
    lineColour: "PURPLE",
    endStations: ["Letiště", "Nádraží Veleslavín"],
    routes: [[0, 1]],
    stationsForward: [
      [
        "Terminál 1",
        "Terminál 2",
        "Schengenská",
        "U Hangáru",
        "Na Padesátníku",
        "Terminál 3",
        "K Letišti",
        "Navigátorů",
        "Nová Šárka",
        "Divoká Šárka",
        "Nádraží Veleslavín",
      ],
    ],
    stationsBackward: [
      [
        "Nádraží Veleslavín",
        "Divoká Šárka",
        "Nová Šárka",
        "Navigátorů",
        "K Letišti",
        "Terminál 3",
        "Na Padesátníku",
        "U Hangáru",
        "Terminál 1",
        "Terminál 2",
        "Letiště",
      ],
    ],
  },
];
