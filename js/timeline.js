const periods = {

    early: {

        date: "c. 3100–2686 BCE",

        title: "Early Dynastic",

        symbol: "𓆣",

        description:
        "The Early Dynastic Period marks the beginning of unified Egyptian kingship and the development of institutions that shaped later Egypt.",

        facts: [

            "Political unification of Upper and Lower Egypt",

            "Development of early royal traditions",

            "Growth of monumental architecture"

        ]

    },


    old: {

        date: "c. 2686–2181 BCE",

        title: "Old Kingdom",

        symbol: "𓂀",

        description:
        "The Old Kingdom is remembered for monumental architecture and the great pyramid complexes built for Egyptian kings.",

        facts: [

            "Construction of the great pyramids",

            "Development of large royal complexes",

            "Expansion of centralized government"

        ]

    },


    middle: {

        date: "c. 2055–1650 BCE",

        title: "Middle Kingdom",

        symbol: "𓋹",

        description:
        "The Middle Kingdom was a period of political stability, literature, artistic development and renewed monumental building.",

        facts: [

            "Expansion of Egyptian territory",

            "Major developments in literature",

            "Renewed construction projects"

        ]

    },


    new: {

        date: "c. 1550–1070 BCE",

        title: "New Kingdom",

        symbol: "𓅓",

        description:
        "The New Kingdom saw Egypt reach great political and cultural influence, producing famous rulers, temples and works of art.",

        facts: [

            "Reigns of famous pharaohs",

            "Major temple construction",

            "International expansion and diplomacy"

        ]

    },


    ptolemaic: {

        date: "305–30 BCE",

        title: "Ptolemaic Egypt",

        symbol: "𓏏",

        description:
        "The Ptolemaic period blended Egyptian traditions with Greek culture and produced important centers of learning and scholarship.",

        facts: [

            "Alexandrian scholarship",

            "Blending of Egyptian and Greek traditions",

            "Creation of multilingual inscriptions"

        ]

    }

};


const buttons =
    document.querySelectorAll(".period-button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(item =>
            item.classList.remove("active")
        );

        button.classList.add("active");


        const period =
            periods[button.dataset.period];


        document.getElementById("periodDate")
            .textContent = period.date;

        document.getElementById("periodTitle")
            .textContent = period.title;

        document.getElementById("periodDescription")
            .textContent = period.description;

        document.getElementById("periodSymbol")
            .textContent = period.symbol;


        const facts =
            document.getElementById("periodFacts");


        facts.innerHTML = "";


        period.facts.forEach(fact => {

            const div =
                document.createElement("div");

            div.textContent = fact;

            facts.appendChild(div);

        });

    });

});