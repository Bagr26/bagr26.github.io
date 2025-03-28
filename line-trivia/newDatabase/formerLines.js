/**
 * @type {{lineName: string;lineColour: "GREEN"|"YELLOW"|"RED"|"DARKBLUE"|"BROWN"|"PURPLE"|"LIGHTBLUE";endStations: string[];routes: number[][];stationsForward: string[][];stationsBackward: string[][]}[]}
 */
export const formerLines = [
  {
    lineName: "27",
    lineColour: "BROWN",
    endStations: ["Libeňský most", "Libuš"],
    routes: [[0, 1]],
    stationsForward: [
      [
        "Libeňský most",
        "Maniny",
        "Tusarova",
        "Holešovická tržnice",
        "Vltavská",
        "Strossmayerovo náměstí",
        "Nábřeží Kapitána Jaroše",
        "Čechův most",
        "Právnická fakulta",
        "Staroměstská",
        "Karlovy lázně",
        "Národní divadlo",
        "Jiráskovo náměstí",
        "Palackého náměstí",
        "Výtoň",
        "Podolská vodárna",
        "Kublov",
        "Dvorce",
        "Přístaviště",
        "Pobřežní cesta",
        "Nádraží Braník",
        "Černý kůň",
        "Belárie",
        "Modřanská škola",
        "Nádraží Modřany",
        "Čechova čtvrť",
        "Poliklinika Modřany",
        "U Libušského potoka",
        "Modřanská rokle",
        "Sídliště Modřany",
        "Hasičská stanice Modřany",
        "Observatoř Libuš",
        "Sídliště Libuš",
        "Libuš",
      ],
    ],
    stationsBackward: [
      [
        "Libuš",
        "Sídliště Libuš",
        "Observatoř Libuš",
        "Hasičská stanice Modřany",
        "Levského",
        "Sídliště Modřany",
        "Modřanská rokle",
        "U Libušského potoka",
        "Poliklinika Modřany",
        "Čechova čtvrť",
        "Nádraží Modřany",
        "Modřanská škola",
        "Belárie",
        "Černý kůň",
        "Nádraží Braník",
        "Pobřežní cesta",
        "Přístaviště",
        "Dvorce",
        "Kublov",
        "Podolská vodárna",
        "Výtoň",
        "Palackého náměstí",
        "Jiráskovo náměstí",
        "Národní divadlo",
        "Karlovy lázně",
        "Staroměstská",
        "Právnická fakulta",
        "Čechův most",
        "Strossmayerovo náměstí",
        "Vltavská",
        "Holešovická tržnice",
        "Dělnická",
        "Maniny",
        "Libeňský most",
      ],
    ],
  },
  {
    lineName: "119",
    lineColour: "LIGHTBLUE",
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
  {
    lineName: "140",
    lineColour: "LIGHTBLUE",
    endStations: ["Palmovka", "Čakovice", "Miškovice"],
    routes: [
      [0, 1],
      [0, 2],
    ],
    stationsForward: [
      [
        "Palmovka",
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
    lineName: "165",
    lineColour: "LIGHTBLUE",
    endStations: ["Sídliště Zbraslav", "Háje"],
    routes: [[0, 1]],
    stationsForward: [
      [
        "Sídliště Zbraslav",
        "U Včely",
        "Elišky Přemyslovny",
        "Zbraslavské náměstí",
        "Most Závodu míru",
        "Nádraží Zbraslav",
        "Závist",
        "Na Šabatce",
        "Komořany",
        "Cukrovar Modřany",
        "Nádraží Modřany",
        "Obchodní náměstí",
        "Na Havránce",
        "Poliklinika Modřany",
        "Poliklinika Modřany",
        "U Libušského potoka",
        "Modřanská rokle",
        "Sídliště Modřany",
        "Levského",
        "Observatoř Libuš",
        "Sídliště Libuš",
        "Jirčanská",
        "Libuš",
        "Mílová",
        "Dobronická",
        "U Tří Svatých",
        "Kunratická škola",
        "Kunratice",
        "Šeberák",
        "Vožická",
        "Hrnčířský hřbitov",
        "Pod Vsí",
        "V Ladech",
        "Šeberov",
        "Opatov",
        "Bachova",
        "Mikulova",
        "Hněvkovského",
        "Modrá škola",
        "Háje",
      ],
    ],
    stationsBackward: [
      [
        "Háje",
        "Modrá škola",
        "Hněvkovského",
        "Mikulova",
        "Bachova",
        "Opatov",
        "Šeberov",
        "V Ladech",
        "Pod Vsí",
        "Hrnčířský hřbitov",
        "Vožická",
        "Šeberák",
        "Kunratice",
        "Kunratická škola",
        "U Tří Svatých",
        "Dobronická",
        "Mílová",
        "Libuš",
        "Jirčanská",
        "Sídliště Libuš",
        "Observatoř Libuš",
        "Levského",
        "Sídliště Modřany",
        "Modřanská rokle",
        "U Libušského potoka",
        "Poliklinika Modřany",
        "Na Havránce",
        "Obchodní náměstí",
        "Nádraží Modřany",
        "Cukrovar Modřany",
        "Komořany",
        "Na Šabatce",
        "Nad Závistí",
        "Závist",
        "Nádraží Zbraslav",
        "Most Závodu míru",
        "Zbraslavské náměstí",
        "Žabovřeská",
        "Sídliště Zbraslav",
      ],
    ],
  },
];
