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
            image: "bouquet1.jpg",
            title: "A Confession 🌹",
            message:
                "If this Bouquet could speak, it would tell you that somewhere between our little conversations, your smile and the feeling of your presence has became a part of my everyday thought. These flowers are just small way of saying that you are incredibly special to me my cutiepie. ❤️"
        },

        2: {
            image: "bouquet2.jpg",
            title: "A Promise 🌸",
            message:
                "I Can't promise you that every day will be perfect, but I can promise to be there through the beautiful days and the difficult ones--to listen, to understand, to keep choosing you, and to never ever take what we have for granted. 💗"
        },

        3: {
            image: "bouquet3.jpg",
            title: "A Little Forever 💐",
            message:
                "If I could ask life for just one think, it would be a forever with you--more ordinary days, more silly moments, more flowers, more memories and your hand in mine through all of it. ❤️"
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
