// ===== Interactive Element 1: Random Space Fact Generator =====

var spaceFacts = [
    "A day on Venus is longer than a year on Venus!",
    "Neutron stars can spin 600 times per second.",
    "There are more stars in the universe than grains of sand on Earth.",
    "The footprints on the Moon will last for 100 million years.",
    "Space is completely silent because there is no air to carry sound.",
    "One million Earths could fit inside the Sun.",
    "The Milky Way galaxy is about 100,000 light-years across.",
    "A spacesuit costs approximately $12 million.",
    "Saturn would float in water because it is mostly made of gas.",
    "Light from the Sun takes 8 minutes to reach Earth."
];

function showFact() {
    var randomIndex = Math.floor(Math.random() * spaceFacts.length);
    var factDisplay = document.getElementById("fact-display");
    factDisplay.textContent = spaceFacts[randomIndex];
}

// ===== Interactive Element 2: Planet Card Flip =====

function flipCard(card) {
    card.classList.toggle("flipped");
}

// ===== Interactive Element 3: Dark/Light Theme Toggle =====

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    var btn = document.getElementById("theme-btn");
    if (document.body.classList.contains("light-mode")) {
        btn.textContent = "Toggle Dark Mode";
    } else {
        btn.textContent = "Toggle Light Mode";
    }
}

// ===== Nav Active Link =====

function setActive(clicked) {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    clicked.classList.add("active");
}

// ===== Form Submission =====

function handleSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var message = document.getElementById("form-message");
    message.textContent = "Thanks for signing up, " + name + "! We will send you space updates.";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
