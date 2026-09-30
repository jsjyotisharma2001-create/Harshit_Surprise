const correctPassword = "2131";


function checkPassword() {

    const enteredPassword =
        document.getElementById("password").value;

    if (enteredPassword === correctPassword) {

        document.getElementById("passwordScreen")
            .style.display = "none";

        document.getElementById("mainPage")
            .classList.remove("hidden");

    } else {

        document.getElementById("error")
            .innerText =
            "Hmm... that's not our secret code ❤️";

    }
}


function openNote() {

    document.getElementById("noteModal")
        .style.display = "flex";
}


function openSong() {

    document.getElementById("songModal")
        .style.display = "flex";
}


function openLetter() {

    document.getElementById("letterModal")
        .style.display = "flex";
}


function closeModal(id) {

    document.getElementById(id)
        .style.display = "none";
}


window.onclick = function(event) {

    if (event.target.classList.contains("modal")) {

        event.target.style.display = "none";

    }

};

/* =========================================
   BOUQUET SLIDER
========================================= */

let currentBouquet = 1;

const totalBouquets = 3;


function updateBouquet() {

    const bouquets =
        document.querySelectorAll(".bouquet-card");

    bouquets.forEach(function(bouquet) {

        bouquet.classList.remove("active");

    });

    bouquets[currentBouquet - 1]
        .classList.add("active");

}


/* =========================================
   NEXT BOUQUET
========================================= */

function nextBouquet() {

    currentBouquet++;

    if (currentBouquet > totalBouquets) {
        currentBouquet = 1;
    }

    updateBouquet();

}


/* =========================================
   PREVIOUS BOUQUET
========================================= */

function previousBouquet() {

    currentBouquet--;

    if (currentBouquet < 1) {
        currentBouquet = totalBouquets;
    }

    updateBouquet();

}


/* =========================================
   OPEN BOUQUET
========================================= */

function openBouquet(number) {

    const bouquetImage =
        document.getElementById("selectedBouquet");

    const bouquetTitle =
        document.getElementById("bouquetModalTitle");

    const bouquetMessage =
        document.getElementById("bouquetMessage");


    const bouquetData = {

        1: {
            image: "images/bouquet1.jpg",
            title: "A bouquet just for you 🌹",
            message:
                "Because you deserve something beautiful, Harshit. ❤️"
        },

        2: {
            image: "images/bouquet2.jpg",
            title: "A little happiness for you 🌸",
            message:
                "If I could, I would give you flowers every day. 💗"
        },

        3: {
            image: "images/bouquet3.jpg",
            title: "My favourite bouquet 💐",
            message:
                "Just a tiny reminder of how special you are to me. ❤️"
        }

    };


    bouquetImage.src =
        bouquetData[number].image;

    bouquetTitle.innerText =
        bouquetData[number].title;

    bouquetMessage.innerText =
        bouquetData[number].message;


    document.getElementById("bouquetModal")
        .style.display = "flex";

}


/* =========================================
   SHOW WELCOME PAGE
========================================= */

function showWelcome() {

    document.querySelector(".bouquet-page")
        .style.display = "none";


    document.getElementById("welcomeSection")
        .classList.remove("hidden");

}

/* =================================
   FINAL LOVE SURPRISE
================================= */

function openFinalSurprise() {

    document.getElementById("finalModal")
        .style.display = "flex";

}