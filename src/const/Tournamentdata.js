


export const tournamentInfo = [
    
    {
      tournamentType:"round",
      name:"Rundenturnier",
      //src:{runden_turnierPNG}, //klappt so irgendwie nicht
      linkTo:"/createRoundTournament",
      infoText: "Als „Rundenturnier“ (auch „Jeder gegen jeden“, englisch Round Robin oder Liga-System) wird eine Turnierform bezeichnet, bei der jeder Turnierteilnehmer gleich oft gegen alle anderen Turnierteilnehmer antritt.",
      teaserText: "Als „Rundenturnier“ wird eine Turnierform bezeichnet, bei der jeder Turnierteilnehmer gleich oft gegen alle anderen Turnierteilnehmer antritt...",
      pros: [
        {id: 1, value: "Dauert länger und ist genauer"},
        {id: 2, value: "Sieger ist tatsächlich der Beste"},
      ],
      cons: [
        {id: 10, value: "Viele Spiele notwendig"},
        {id: 11, value: "Schnelles Ausscheiden möglich"},
        {id: 12, value: "Für viele Teilnehmer wird kein Rang ermittelt"},
      ]
    },
    {
      tournamentType:"ko",
      name:"K.O. Turnier",
      //src:{ko_turnierPNG}, //klappt so irgendwie nicht
      linkTo:"/createKnockoutTournament",
      infoText: "Das K.-o.-System (von englisch knockout; etwa: „außer Gefecht setzen“) im engeren Sinne ist eine Turnierform, bei der in jeder Spielrunde jeweils zwei Teilnehmer aufeinandertreffen und der Verlierer ausscheidet, bis schließlich im Finale der Sieger des Turniers ermittelt wird. Zweifaches ausscheiden einstellbar.",
      teaserText: "Das K.-o.-System ist eine Turnierform, bei der in jeder Spielrunde jeweils zwei Teilnehmer aufeinandertreffen...",
      pros: [
        {id: 1, value: "Spannend, da jedes Match entscheidet."},
        {id: 2, value: "Geeigent für viele Teilnehmer"},
      ],
      cons: [
        {id: 10, value: "Wenig Turniererfahrung"},
        {id: 11, value: "Schnelles Ausscheiden möglich"},
        {id: 12, value: "Für viele Teilnehmer wird kein Rang ermittelt"},
      ]
    }
  ]


  export const roundTournamentSettings = 

    {
        settingElementsTop:
        [
            {
                id: 1,
                text: "Anzahl Turnierrunden",
                controlElement: "incrementer",
                maxValue: 10,
                minValue: 0,
            },
            {   id: 2,
                text: "Teams erlauben",
                controlElement: "switch"
            },
            {   id: 3,
                text: "Teamgröße beschränken",
                controlElement: "switch"
            },
            {
                id: 4,
                text: "Max. Teamgröße",
                controlElement: "incrementer",
                maxValue: 10,
                minValue: 0,
            }
        ],
    
        settingElementsMiddle:
        [
            {
                id: 100,
                text: "Punkte bei Sieg",
                controlElement: "incrementer",
                maxValue: 10,
                minValue: 0,
            },
            {
              id: 101,
              text: "Punkte bei Gleichstand",
              controlElement: "incrementer",
              maxValue: 10,
              minValue: 0,
            },
            {
              id: 102,
              text: "Punkte bei Niederlage",
              controlElement: "incrementer",
              maxValue: 10,
              minValue: 0,
            },
        ],
        settingElementsBottom:
        [
            {
              id: 103,
              text: "Anzahl paralleler Spiele",
              controlElement: "incrementer",
              maxValue: 10,
              minValue: 0,
            },
        ]
    }

    export const koTournamentSettings = 

    {
        settingElementsTop :
        [
            {
                id: 1,
                text: "Teams erlauben",
                controlElement: "switch"
            },
            {
                id: 2,
                text: "Teamgröße beschränken",
                controlElement: "switch"
            },
            {
              id: 3,
              text: "Max. Teamgröße",
              controlElement: "incrementer",
              maxValue: 10,
              minValue: 0,
            },
        ],
    
        settingElementsMiddle :
        [
            {
                id: 10,
                text: "Double Elemination",
                controlElement: "switch"
            },
        ],
        settingElementsBottom :
        [
            {
              id: 103,
              text: "Anzahl paralleler Spiele",
              controlElement: "incrementer",
              maxValue: 10,
              minValue: 0,
            },
        ]
    }
