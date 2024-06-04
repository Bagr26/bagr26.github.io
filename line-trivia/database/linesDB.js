// The database of *all* the lines in the Prague system

export const linesDB = {
  metroLines: [
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
  ],
  futureMetroLines: [
    {
      lineName: "D",
      endStations: ["Náměstí Míru", "Depo Písnice"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
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
    },
  ],
  tramLinesDay: [
    {
      lineName: "1",
      endStations: ["Sídliště Petřiny", "Spojovací"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Korunovační", "Tusarova"], neg: ["Dělnická"] }],
      stations: [
        "Sídliště Petřiny",
        "Petřiny",
        "Větrník",
        "Vojenská nemocnice",
        "Baterie",
        "Ořechovka",
        "Sibeliova",
        "Vozovna Střešovice",
        "Prašný most",
        "Hradčanská",
        "Sparta",
        "Korunovační",
        "Letenské náměstí",
        "Kamenická",
        "Strossmayerovo náměstí",
        "Vltavská",
        "Holešovická tržnice",
        "Tusarova",
        "Dělnická",
        "Maniny",
        "Libeňský most",
        "Palmovka",
        "Krejcárek",
        "Ohrada",
        "Vozovna Žižkov",
        "Strážní",
        "Chmelnice",
        "Kněžská luka",
        "Spojovací",
      ],
    },
    {
      lineName: "2",
      endStations: ["Sídliště Petřiny", "Nádraží Braník"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Novoměstská radnice"], neg: ["Moráň"] }],
      stations: [
        "Sídliště Petřiny",
        "Petřiny",
        "Větrník",
        "Vojenská nemocnice",
        "Baterie",
        "Ořechovka",
        "Sibeliova",
        "Vozovna Střešovice",
        "Prašný most",
        "Hradčanská",
        "Chotkovy sady",
        "Malostranská",
        "Staroměstská",
        "Karlovy lázně",
        "Národní divadlo",
        "Národní třída",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        ["Palackého náměstí", "Palackého náměstí"],
        "Výtoň",
        "Podolská vodárna",
        "Kublov",
        "Dvorce",
        "Přístaviště",
        "Pobřežní cesta",
        "Nádraží Braník",
      ],
    },
    {
      lineName: "3",
      endStations: ["Kobylisy", "Nádraží Braník", "Sídliště Modřany"],
      routes: [
        [0, 1],
        [0, 2],
      ],
      routeExceptions: [
        {
          both: [
            "Černý kůň",
            "Belárie",
            "Modřanská škola",
            "Nádraží Modřany",
            "Čechova čtvrť",
            "Poliklinika Modřany",
            "U Libušského potoka",
            "Modřanská rokle",
            "Sídliště Modřany",
            "Levského",
          ],
          pos: ["Novoměstská radnice"],
          neg: ["Březiněveská", "Divadlo pod Palmovkou", "Moráň"],
        },
        { both: [], pos: ["Novoměstská radnice", "Levského"], neg: ["Březiněveská", "Divadlo pod Palmovkou", "Moráň"] },
      ],
      stations: [
        "Březiněveská",
        "Kobylisy",
        "Ke Stírce",
        "Okrouhlická",
        "Vychovatelna",
        "Bulovka",
        "Vosmíkových",
        "U Kříže",
        "Libeňský zámek",
        "Divadlo pod Palmovkou",
        "Palmovka",
        "Invalidovna",
        "Urxova",
        "Křižíkova",
        "Karlínské náměstí",
        "Florenc",
        "Bílá labuť",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        ["Palackého náměstí", "Palackého náměstí"],
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
        "Levského",
      ],
    },
    {
      lineName: "4",
      endStations: ["Slivenec", "Kubánské Náměstí"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Moráň"], neg: [] }],
      stations: [
        "Slivenec",
        "Holyně",
        "Náměstí Olgy Scheinpflugové",
        "Sídliště Barrandov",
        "Poliklinika Barrandov",
        "Chaplinovo náměstí",
        "K Barrandovu",
        "Geologická",
        "Hlubočepy",
        "Zlíchov",
        "Lihovar",
        "Smíchovské nádraží",
        "Plzeňka",
        "Na Knížecí",
        "Anděl",
        "Zborovská",
        "Palackého náměstí",
        "Moráň",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Jana Masaryka",
        "Krymská",
        "Ruská",
        "Vršovické náměstí",
        "Čechovo náměstí",
        "Koh-i-noor",
        "Slavia - Nádraží Eden",
        "Kubánské náměstí",
      ],
    },
    {
      lineName: "5",
      endStations: ["Slivenec", "Vozovna Žižkov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
        "Slivenec",
        "Holyně",
        "Náměstí Olgy Scheinpflugové",
        "Sídliště Barrandov",
        "Poliklinika Barrandov",
        "Chaplinovo náměstí",
        "K Barrandovu",
        "Geologická",
        "Hlubočepy",
        "Zlíchov",
        "Lihovar",
        "Smíchovské nádraží",
        "Plzeňka",
        "Na Knížecí",
        "Anděl",
        "Zborovská",
        "Jiráskovo náměstí",
        "Myslíkova",
        "Lazarská",
        "Vodičkova",
        "Václavské náměstí",
        "Jindřišská",
        "Hlavní nádraží",
        "Viktoria Žižkov",
        "Lipanská",
        "Olšanské náměstí",
        "Olšanská",
        ["Nákladové nádraží Žižkov", "Nákladové nádraží Žižkov"],
        "Biskupcova",
        "Ohrada",
        "Vozovna Žižkov",
      ],
    },
    {
      lineName: "6", // LATER check this out when, maybe goes to Palmovka
      endStations: ["Palmovka", "Kubánské náměstí"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Dělnická", "Novoměstská Radnice"], neg: ["U Průhonu", "Nábřeží Kapitána Jaroše"] }],
      stations: [
        "Palmovka",
        "Libeňský most",
        "Maniny",
        "Dělnická",
        "U Průhonu",
        "Ortenovo náměstí",
        "Nádraží Holešovice",
        "Veletržní palác",
        "Strossmayerovo náměstí",
        "Nábřeží Kapitána Jaroše",
        "Dlouhá Třída",
        "Náměstí Republiky",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Bruselská",
        "Pod Karlovem",
        "Nuselské schody",
        "Otakarova",
        "Nádraží Vršovice",
        "Bohemians",
        "Koh-i-noor",
        "Slaiva - Nádraží Eden",
        "Kubánské náměstí",
      ],
    },
    {
      lineName: "7",
      endStations: ["Radlická", "Depo Hostivař"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: ["Vinice"] }],
      stations: [
        "Radlická",
        "Škola Radlice",
        "Laurová",
        "Braunova",
        "Křížová",
        "Anděl",
        "Zborovská",
        "Palackého náměstí",
        "Výtoň",
        "Albertov",
        "Ostrčilovo náměstí",
        "Svatoplukova",
        "Divadlo Na Fidlovačce",
        "Otakarova",
        "Nádraží Vršovice",
        "Bohemians",
        "Koh-i-noor",
        "Slaiva - Nádraží Eden",
        "Kubánské náměstí",
        "Průběžná",
        "Strašnická",
        "Vozovna Strašnice",
        "Vinice",
        "Solidarita",
        "Zborov - Strašnické divadlo",
        "Limuzská",
        "Nové Strašnice",
        "Depo Hostivař",
      ],
    },
    {
      lineName: "8",
      endStations: ["Nádraží Podbaba", "Starý Hloubětín"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Korunovační"], neg: [] }],
      stations: [
        "Nádraží Podbaba",
        "Zelená",
        "Lotyšská",
        "Vítězné náměstí",
        "Hradčanská",
        "Sparta",
        "Korunovační",
        "Letenské náměstí",
        "Kamenická",
        "Strossmayerova náměstí",
        "Nábřeží Kapitána Jaroše",
        "Dlouhá Třída",
        "Náměstí Republiky",
        "Bílá labuť",
        "Florenc",
        "Karlínské náměstí",
        "Křižíkova",
        "Urxova",
        "Inalidovna",
        "Palmovka",
        "Balabenka",
        "Ocelářská",
        "Arena Libeň jih",
        "Nádraží Libeň",
        "Kabešova",
        "Podkovářská",
        "U Elektry",
        "Nademlejnská",
        "Starý Hloubětín",
      ],
    },
    {
      lineName: "9",
      endStations: ["Sídliště Řepy", "Spojovací"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
        "Sídliště Řepy",
        "Blatiny",
        "Slánská",
        "Hlušičkova",
        "Krematorium Motol",
        "Motol",
        "Vozovna Motol",
        "Hotel Golf",
        "Poštovka",
        "Kotlářka",
        "Kavalírka",
        "Klamovka",
        "U zvonu",
        "Bertramka",
        "Anděl",
        "Arbesovo náměstí",
        "Švandovo divadlo",
        "Újezd",
        "Národní divadlo",
        "Národní třída",
        "Lazarská",
        "Vodičkova",
        "Václavské náměstí",
        "Jindřišská",
        "Hlavní nádraží",
        "Viktoria Žižkov",
        "Lipanská",
        "Olšanské náměstí",
        "Olšanská",
        "Nákladové nádraží Žižkov",
        "Biskupcova",
        "Ohrada",
        "Vozovna Žižkov",
        "Strážní",
        "Chmelnice",
        "Kněžská luka",
        "Spojovací",
      ],
    },
    {
      lineName: "10",
      endStations: ["Sídliště Řepy", "Sídliště Ďáblice"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Moráň", "Mezi Hřbitovy", "Divadlo pod Palmovkou", "Třebenická"], neg: [] }],
      stations: [
        "Sídliště Řepy",
        "Blatiny",
        "Slánská",
        "Hlušičkova",
        "Krematorium Motol",
        "Motol",
        "Vozovna Motol",
        "Hotel Golf",
        "Poštovka",
        "Kotlářka",
        "Kavalírka",
        "Klamovka",
        "U zvonu",
        "Bertramka",
        "Anděl",
        "Zborovská",
        "Palackého náměstí",
        "Moráň",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Šumavská",
        "Vinohradská vodárna",
        "Perunova",
        "Orionka",
        "Flora",
        "Olšanské hřbitovy",
        "Želivského",
        "Mezi Hřbitovy",
        "Nákladové nádraží Žižkov",
        "Biskupcova",
        "Krejcárek",
        "Palmovka",
        "Divadlo pod Palmovkou",
        "Libeňský zámek",
        "U Kříže",
        "Vosmíkových",
        "Bulovka",
        "Vychovatelna",
        "Okrouhlická",
        "Ke Stírce",
        "Kobylisy",
        "Střelničná",
        "Kyselova",
        "Ládvní",
        "Štěpničná",
        "Třebenická",
        "Sídliště Ďáblice",
      ],
    },
    {
      lineName: "11",
      endStations: ["Spojovací", "Spořilov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: ["Mezi Hřbitovy"] }],
      stations: [
        "Spojovací",
        "Kněžská luka",
        "Chmelnice",
        "Strážní",
        "Vozovna Žižkov",
        "Ohrada",
        "Biskupcova",
        "Nákladové nádraží Žižkov",
        "Mezi Hřbitovy",
        "Želivského",
        "Olšanské hřbitovy",
        "Flora",
        "Radhošťská",
        "Jiřího z Poděbrad",
        "Vinohradská tržnice",
        "Italská",
        "Muzeum",
        "I. P. Pavlova",
        "Bruselská",
        "Pod Karlovem",
        "Nuselské schody",
        "Náměstí Bratří Synků",
        "Horky",
        "Pod Jezerkou",
        "Michelská",
        "Plynárna Michle",
        "Chodovská",
        "Teplárna Michle",
        "Spořilov",
      ],
    },
    {
      lineName: "12",
      endStations: ["Výstaviště", "Sídliště Barrandov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["U Průhonu"], neg: ["Tusarova", "Korunovační"] }],
      stations: [
        "Výstaviště",
        "Nádraží Holešovice",
        "U Průhonu",
        "Dělnická",
        "Tusarova",
        "Holešovická tržnice",
        "Vltavská",
        "Strossmayerovo náměstí",
        "Kamenická",
        "Letenské náměstí",
        "Korunovační",
        "Sparta",
        "Chotkovy sady",
        "Malostranská",
        "Malostrasnké náměstí",
        "Hellichova",
        "Újezd",
        "Švandovo divadlo",
        "Arbesovo náměstí",
        "Anděl",
        "Plzeňka",
        "Smíchovské nádraží",
        "Lihovar",
        "Zlíchov",
        "Hlubočepy",
        "Geologická",
        "K Barrandovu",
        "Chaplinovo náměstí",
        "Poliklinika Barrandov",
        "Sídliště Barrandov",
      ],
    },
    {
      lineName: "13",
      endStations: ["Olšanské hřbitovy", "Čechovo náměstí"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
        "Olšanské hřbitovy",
        "Flora",
        "Radhošťská",
        "Jiřího z Poděbrad",
        "Vinohradská tržnice",
        "Italská",
        "Muzeum",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Jana Masaryka",
        "Krymská",
        "Ruská",
        "Vršovické náměstí",
        "Čechovo náměstí",
      ],
    },
    {
      lineName: "14",
      endStations: ["Palmovka", "Spořilov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Dělnická", "Novoměstská radnice"], neg: ["Tusarova", "Moráň"] }],
      stations: [
        "Palmovka",
        "Libeňský most",
        "Maniny",
        "Dělnická",
        "Tusarova",
        "Bubenská",
        "Štvanice",
        "Těšnov",
        "Bílá labuť",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        "Botanická zahrada",
        "Albertov",
        "Ostrčilovo náměstí",
        "Svatoplukova",
        "Divadlo Na Fidlovačce",
        "Náměstí Bratří Synků",
        "Horky",
        "Pod Jezerkou",
        "Michelská",
        "Plynárna Michle",
        "Chodovská",
        "Teplárna Michle",
        "Spořilov",
      ],
    },
    {
      lineName: "15",
      endStations: ["Kotlářka", "Olšanské hřbitovy"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
        "Kotlářka",
        "Kavalírka",
        "Klamovka",
        "U zvonu",
        "Bertramka",
        "Anděl",
        "Arbesovo náměstí",
        "Švandovo divadlo",
        "Újezd",
        "Hellichova",
        "Malostranské náměstí",
        "Malostranská",
        "Čechův most",
        "Dlouha třída",
        "Náměstí Republiky",
        "Masarykovo nádraží",
        "Hlavní nádraží",
        "Viktoria Žižkov",
        "Lipanská",
        "Olšanské náměstí",
        "Flora",
        "Olšanské hřbitovy",
      ],
    },
    {
      lineName: "16",
      endStations: ["Sídliště Řepy", "Kotlářka", "Ústřední dílny DP"],
      routes: [
        [0, 2],
        [1, 2],
      ],
      routeExceptions: [
        { both: [], pos: ["Moráň"], neg: [] },
        {
          both: ["Sídliště Řepy", "Blatiny", "Slánská", "Hlušičkova", "Krematorium Motol", "Motol", "Vozovna Motol", "Hotel Golf", "Poštovka"],
          pos: ["Moráň"],
          neg: [],
        },
      ],
      stations: [
        "Sídliště Řepy",
        "Blatiny",
        "Slánská",
        "Hlušičkova",
        "Krematorium Motol",
        "Motol",
        "Vozovna Motol",
        "Hotel Golf",
        "Poštovka",
        "Kotlářka",
        "Kavalírka",
        "Klamovka",
        "U zvonu",
        "Bertramka",
        "Anděl",
        "Zborovská",
        "Palackého náměstí",
        "Moráň",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Šumavská",
        "Vinohradská vodárna",
        "Perunova",
        "Orionka",
        "Flora",
        "Olšanské hřbitovy",
        "Želivského",
        "Vinohradské hřbitovy",
        "Krematorium Strašnice",
        "Vinice",
        "Solidarita",
        "Zborov - Strašnické divadlo",
        "Limuzská",
        "Nové Strašnice",
        "Depo Hostivař",
        "Malešická továrna",
        "Na Homoli",
        "Ústřední dílny DP",
      ],
    },
    {
      lineName: "17",
      endStations: ["Vozovna Kobylisy", "Sídliště Modřany"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Levského"], neg: ["Nábřeží Kapitána Jaroše"] }],
      stations: [
        "Vozovna Kobylisy",
        "Líbeznická",
        "Březiněveská",
        "Kobylisy",
        "Ke Stírce",
        "Hercovka",
        "Nad Trojou",
        "Trojská",
        "Nádraží Holešovice",
        "Výstaviště",
        "Veletržní palác",
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
        "Levského",
      ],
    },
    {
      lineName: "18",
      endStations: ["Nádraží Podbaba", "Vozovna Pankrác"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Novoměstská radnice"], neg: ["Moráň"] }],
      stations: [
        "Nádraží Podbaba",
        "Zelená",
        "Lotyšská",
        "Vítězné náměstí",
        "Hradčanská",
        "Chotkovy sady",
        "Malostranská",
        "Staroměstská",
        "Karlovy lázně",
        "Národní divadlo",
        "Národní třída",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        "Botanická zahrada",
        "Albertov",
        "Ostrčilovo náměstí",
        "Svatoplukova",
        "Divadlo Na Fidlovačce",
        "Náměstí Bratří Synků",
        "Nuselská radnice",
        "Palouček",
        "Pražského povstání",
        "Kotorská",
        "Na Veselí",
        "Vozovna Pankrác",
      ],
    },
    {
      lineName: "19",
      endStations: ["Pankrác", "Lehovec"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Otakarova", "Mezi Hřbitovy"], neg: ["Vinice"] }],
      stations: [
        "Pankrác",
        "Kotorská",
        "Pražského povstání",
        "Palouček",
        "Nuselská radnice",
        "Náměstí Bratří Synků",
        "Otakarova",
        "Nádraží Vršovice",
        "Bohemians",
        "Koh-i-noor",
        "Slaiva - Nádraží Eden",
        "Kubánské náměstí",
        "Průběžná",
        "Strašnická",
        "Vozovna Strašnice",
        "Vinice",
        "Krematorium Strašnice",
        "Vinohradské hřbitovy",
        "Želivského",
        "Mezi Hřbitovy",
        "Nákladové nádraží Žižkov",
        "Biskupcova",
        "Krejcárek",
        "Palmovka",
        "Balabenka",
        "Divadlo Gong",
        "Poliklinika Vysočany",
        "Nádraží Vysočany",
        "Vysočanská",
        "Špitálská",
        "Poštovská",
        "Kolbenova",
        "Nový Hloubětín",
        "Vozovna Hloubětín",
        "Starý Hloubětín",
        "Hloubětín",
        "Sídliště Hloubětín",
        "Lehovec",
      ],
    },
    {
      lineName: "20",
      endStations: ["Dědina", "Sídliště Barrandov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [
        "Dědina",
        "Sídliště Na Dědině",
        "Vlastina",
        "Divoká Šárka",
        "Vozovna Vokovice",
        "Nad Džbánem",
        "Nádraží Veleslavín",
        "Červený Vrch",
        "Sídliště Červený Vrch",
        "Bořislavka",
        "Na Pískách",
        "Hadovka",
        "Thákurova",
        "Dejvická",
        "Vítězné náměstí",
        "Hradčanská",
        "Chotkovy sady",
        "Malostranská",
        "Malostrasnké náměstí",
        "Hellichova",
        "Újezd",
        "Švandovo divadlo",
        "Arbesovo náměstí",
        "Anděl",
        "Plzeňka",
        "Smíchovské nádraží",
        "Lihovar",
        "Zlíchov",
        "Hlubočepy",
        "Geologická",
        "K Barrandovu",
        "Chaplinovo náměstí",
        "Poliklinika Barrandov",
        "Sídliště Barrandov",
      ],
    },
    {
      lineName: "21",
      endStations: ["Radlická", "Sídliště Modřany"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Levského"], neg: [] }],
      stations: [
        "Radlická",
        "Škola Radlice",
        "Laurová",
        "Braunova",
        "Křížová",
        "Anděl",
        "Zborovská",
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
        "Levského",
      ],
    },
    {
      lineName: "22",
      endStations: ["Bílá Hora", "Vypich", "Zahradní město", "Nádraží Hostivař"],
      routes: [
        [0, 2],
        [0, 3],
        [1, 2],
        [1, 3],
      ],
      routeExceptions: [
        {
          both: ["Sídliště zahradní Město", "Obchodní centrum Hostivař", "Na Groši", "Hostivařská", "Nádraží Hostivař"],
          pos: ["Novoměstská radnice"],
          neg: [],
        },
        { both: [], pos: ["Novoměstská radnice"], neg: [] },
        {
          both: [
            "Bílá Hora",
            "Malý Břevnov",
            "Obora Hvězda",
            "Sídliště zahradní Město",
            "Obchodní centrum Hostivař",
            "Na Groši",
            "Hostivařská",
            "Nádraží Hostivař",
          ],
          pos: ["Novoměstská radnice"],
          neg: [],
        },
        { both: ["Bílá Hora", "Malý Břevnov", "Obora Hvězda"], pos: ["Novoměstská radnice"], neg: [] },
      ],
      stations: [
        "Bílá Hora",
        "Malý Břevnov",
        "Obora Hvězda",
        "Vypich",
        "Říčanova",
        "Břevnovský klášter",
        "U Kaštanu",
        "Drinopol",
        "Marjánka",
        "Malovanka",
        "Pohořelec",
        "Brusnice",
        "Pražský hrad",
        "Královský letohrádek",
        "Malostranská",
        "Malostranské náměstí",
        "Hellichova",
        "Újezd",
        "Národní divadlo",
        "Národní třída",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Jana Masaryka",
        "Krymská",
        "Ruská",
        "Vršovické náměstí",
        "Čechovo náměstí",
        "Koh-i-noor",
        "Slavia - Nádraží Eden",
        "Kubánské náměstí",
        "Průběžná",
        "Na Hroudě",
        "Staré Strašnice",
        "Radošovická",
        "Dubečská",
        "Nádraží Zahradní Město",
        "Zahradní Město",
        "Sídliště zahradní Město",
        "Obchodní centrum Hostivař",
        "Na Groši",
        "Hostivařská",
        "Nádraží Hostivař",
      ],
    },
    {
      lineName: "23",
      endStations: ["Královka", "Zvonařka"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Pohořelec", "Novoměstská radnice"], neg: ["Hládkov"] }],
      stations: [
        "Královka",
        "Malovanka",
        "Hládkov",
        "Pohořelec",
        "Brusnice",
        "Pražský hrad",
        "Královský letohrádek",
        "Malostranská",
        "Malostranské náměstí",
        "Hellichova",
        "Újezd",
        "Národní divadlo",
        "Národní třída",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Bruselská",
        "Zvonařka",
      ],
    },
    {
      lineName: "24",
      endStations: ["Vozovna Kobylisy", "Náměstí Bratří Synků"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Novoměstská radnice"], neg: ["Březiněveská", "Divadlo pod Palmovkou", "Moráň", "Otakarova"] }],
      stations: [
        "Březiněveská",
        "Kobylisy",
        "Ke Stírce",
        "Okrouhlická",
        "Vychovatelna",
        "Bulovka",
        "Vosmíkových",
        "U Kříže",
        "Libeňský zámek",
        "Divadlo pod Palmovkou",
        "Palmovka",
        "Invalidovna",
        "Urxova",
        "Křižíkova",
        "Karlínské náměstí",
        "Florenc",
        "Bílá labuť",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        "Botanická zahrada",
        "Albertov",
        "Ostrčilovo náměstí",
        "Svatoplukova",
        "Divadlo Na Fidlovačce",
        "Otakarova",
        "Náměstí Bratří Synků",
      ],
    },
    {
      lineName: "25",
      endStations: ["Bílá Hora", "Lehovec"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Korunovační"], neg: [] }],
      stations: [
        "Bílá Hora",
        "Malý Břevnov",
        "Obora Hvězda",
        "Vypich",
        "Říčanova",
        "Břevnovský klášter",
        "U Kaštanu",
        "Drinopol",
        "Marjánka",
        "Malovanka",
        "Park Maxe van der Stoela",
        "Vozovna Střešovice",
        "Prašný most",
        "Hradčanská",
        "Sparta",
        "Korunovační",
        "Letenské náměstí",
        "Kamenická",
        "Strossmayerova náměstí",
        "Bubenská",
        "Štvanice",
        "Těšnov",
        "Florenc",
        "Karlínské náměstí",
        "Křižíkova",
        "Urxova",
        "Inalidovna",
        "Palmovka",
        "Balabenka",
        "Ocelářská",
        "Arena Libeň jih",
        "Nádraží Libeň",
        "Kabešova",
        "Podkovářská",
        "U Elektry",
        "Nademlejnská",
        "Starý Hloubětín",
        "Hloubětín",
        "Sídliště Hloubětín",
        "Lehovec",
      ],
    },
    {
      lineName: "26",
      endStations: ["Dědina", "Nádraží Hostivař"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Korunovační", "Vinice"], neg: ["Mezi Hřbitovy"] }],
      stations: [
        "Dědina",
        "Sídliště Na Dědině",
        "Vlastina",
        "Divoká Šárka",
        "Vozovna Vokovice",
        "Nad Džbánem",
        "Nádraží Veleslavín",
        "Červený Vrch",
        "Sídliště Červený Vrch",
        "Bořislavka",
        "Na Pískách",
        "Hadovka",
        "Thákurova",
        "Dejvická",
        "Vítězné náměstí",
        "Hradčanská",
        "Sparta",
        "Korunovační",
        "Letenské náměstí",
        "Kamenická",
        "Strossmayerova náměstí",
        "Nábřeží Kapitána Jaroše",
        "Dlouhá Třída",
        "Náměstí Republiky",
        "Masarykovo nádraží",
        "Hlavní nádraží",
        "Viktoria Žižkov",
        "Lipanská",
        "Olšanské náměstí",
        "Olšanská",
        "Nákladové nádraží Žižkov",
        "Mezi Hřbitovy",
        "Želivského",
        "Vinohradské Hřbitovy",
        "Krematorium Strašnice",
        "Vinice",
        "Vozovna Strašnice",
        "Strašnická",
        "Na Hroudě",
        "Staré Strašnice",
        "Radošovická",
        "Dubečská",
        "Nádraží Zahradní Město",
        "Zahradní Město",
        "Sídliště zahradní Město",
        "Obchodní centrum Hostivař",
        "Na Groši",
        "Hostivařská",
        "Nádraží Hostivař",
      ],
    },
    {
      lineName: "27",
      endStations: ["Vozovna Kobylisy", "Libuš"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Levského"], neg: ["Nábřeží Kapitána Jaroše"] }],
      stations: [
        "Vozovna Kobylisy",
        "Líbeznická",
        "Březiněveská",
        "Kobylisy",
        "Ke Stírce",
        "Hercovka",
        "Nad Trojou",
        "Trojská",
        "Nádraží Holešovice",
        "Veletržní palác",
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
        "Levského",
        "Hasičská stanice Modřany",
        "Observatoř Libuš",
        "Sídliště Libuš",
        "Libuš",
      ],
    },
  ],
  // nevim jak to udělám s loopama, problém mého budoucího já
  tramLinesSpecial: [
    {
      lineName: "41",
      endStations: ["Vozovna Střešovice", "Planetárium Praha"],
      routes: [[0, 1]],
      loop: true,
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "42",
      endStations: ["Dlabačov", "Václavské náměstí"],
      routes: [[0, 1]],
      loop: true,
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
  ],
  tramLinesNight: [
    {
      lineName: "91",
      endStations: ["Divoká Šárka", "Radošovická"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Korunovační", "Novoměstská radnice", "Vinice"], neg: ["Nábřeží Kapitána Jaroše"] }],
      stations: [
        "Divoká Šárka",
        "Vozovna Vokovice",
        "Nad Džbánem",
        "Nádraží Veleslavín",
        "Červený Vrch",
        "Sídliště Červený Vrch",
        "Bořislavka",
        "Na Pískách",
        "Hadovka",
        "Thákurova",
        "Dejvická",
        "Vítězné náměstí",
        "Hradčanská",
        "Sparta",
        "Korunovační",
        "Letenské náměstí",
        "Kamenická",
        "Strossmayerova náměstí",
        "Nábřeží Kapitána Jaroše",
        "Dlouhá Třída",
        "Náměstí Republiky",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Štěpánská",
        "I. P. Pavlova",
        "Náměstí Míru",
        "Šumavská",
        "Vinohradská vodárna",
        "Perunova",
        "Orionka",
        "Flora",
        "Olšanské hřbitovy",
        "Želivského",
        "Vinohradské hřbitovy",
        "Krematorium Strašnice",
        "Vinice",
        "Vozovna Strašnice",
        "Strašnická",
        "Na Hroudě",
        "Staré Strašnice",
        "Radošovická",
      ],
    },
    {
      lineName: "92",
      endStations: ["Lehovec", "Sídliště Modřany"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Novoměstská radnice", "Levského"], neg: ["Moráň"] }],
      stations: [
        "Lehovec",
        "Sídliště Hloubětín",
        "Hloubětín",
        "Starý Hloubětín",
        "Nademlejnská",
        "U Elektry",
        "Podkovářská",
        "Kabešova",
        "Nádraží Libeň",
        "Arena Libeň jih",
        "Ocelářská",
        "Balabenka",
        "Palmovka",
        "Invalidovna",
        "Urxova",
        "Křižíkova",
        "Karlínské náměstí",
        "Florenc",
        "Bílá labuť",
        "Masarykovo nádraží",
        "Jindřišská",
        "Václavské náměstí",
        "Vodičkova",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
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
        "Levského",
      ],
    },
    {
      lineName: "93",
      endStations: ["Sídliště Ďáblice", "Vozovna Pankrác"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Novoměstská radnice"], neg: ["Třebenická", "Nábřeží Kapitána Jaroše", "Moráň"] }],
      stations: [
        "Sídliště Ďáblice",
        "Třebenická",
        "Štěpničná",
        "Ládví",
        "Kyselova",
        "Střelničná",
        "Kobylisy",
        "Ke Stírce",
        "Hercovka",
        "Nad Trojou",
        "Trojská",
        "Nádraží Holešovice",
        "Výstaviště",
        "Veletržní palác",
        "Strossmayerovo náměstí",
        "Nábřeží Kapitána Jaroše",
        "Čechův most",
        "Právnická fakulta",
        "Staroměstská",
        "Karlovy lázně",
        "Národní divadlo",
        "Národní třída",
        "Lazarská",
        "Novoměstská radnice",
        "Karlovo náměstí",
        "Moráň",
        "Botanická zahrada",
        "Albertov",
        "Ostrčilovo náměstí",
        "Svatoplukova",
        "Divadlo Na Fidlovačce",
        "Náměstí Bratří Synků",
        "Nuselská radnice",
        "Palouček",
        "Pražského povstání",
        "Kotorská",
        "Na Veselí",
        "Vozovna Pankrác",
      ],
    },
    {
      lineName: "94",
      endStations: ["Slivenec", "Lehovec"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "95",
      endStations: ["Vozovna Kobylisy", "Ústřední dílny DP"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "96",
      endStations: ["Sídliště Petřiny", "Spořilov"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "97",
      endStations: ["Bílá Hora", "Nádraží Hostivař"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "98",
      endStations: ["Sídliště Řepy", "Spojovací"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
    {
      lineName: "99",
      endStations: ["Sídliště Řepy", "Zahradní město"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
  ],
  trolleybusLinesDay: [
    {
      lineName: "58",
      endStations: ["Palmovka", "Čakovice", "Miškovice"],
      routes: [
        [0, 1],
        [0, 2],
      ],
      routeExceptions: [
        { both: [], pos: [], neg: [] },
        { both: [], pos: [], neg: [] },
      ],
      stations: [],
    },
    {
      lineName: "59",
      endStations: ["Letiště", "Nádraží Veleslavín"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: [], neg: [] }],
      stations: [],
    },
  ],
  busLinesDay: [{}],
  busLinesNight: [{}],
  rBusLinesDay: [{}],
  rBusLinesNight: [{}],
  formerLines: [
    {
      lineName: "119",
      endStations: ["Letiště", "Nádraží Veleslavín"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["Letiště"], neg: ["Schengenská"] }],
      stations: [["Terminál 1", "Terminál 2"], "Letiště", "Schengenská", "..."],
    },
    {
      lineName: "140",
      endStations: ["Palmovka", "Čakovice", "Miškovice"],
      routes: [
        [0, 1],
        [0, 2],
      ],
      routeExceptions: [
        { both: [], pos: [], neg: [] },
        { both: [], pos: [], neg: [] },
      ],
      stations: [],
    },
    {
      lineName: "165",
      endStations: ["Sídliště Zbraslav", "Háje"],
      routes: [[0, 1]],
      routeExceptions: [{ both: [], pos: ["U včely"], neg: ["Žabovřeská"] }],
      stations: [],
    },
  ],
};
