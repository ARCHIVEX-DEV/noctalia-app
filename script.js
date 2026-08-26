// 🌙 NOCTALIA — MINI APP TELEGRAM

// Vérifie si l'application est ouverte dans Telegram
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function chooseCharacter(name) {
    // Animation et confirmation visuelle
    const cards = document.querySelectorAll(".character-card");

    cards.forEach((card) => {
        card.style.opacity = "0.45";
        card.style.transform = "scale(0.98)";
    });

    // Si la Mini App est ouverte dans Telegram
    if (tg) {
        // Envoie le personnage choisi au bot Telegram
        tg.sendData(JSON.stringify({
            action: "choose_character",
            character: name.toLowerCase()
        }));

        // Ferme la Mini App après un petit délai
        setTimeout(() => {
            tg.close();
        }, 500);
    } else {
        // Test dans un navigateur normal
        alert("🌙 Tu as choisi " + name + " !");
    }
}