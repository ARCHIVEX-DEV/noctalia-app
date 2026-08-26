// 🌙 NOCTALIA — MINI APP TELEGRAM

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function chooseCharacter(name) {
    const cards = document.querySelectorAll(".character-card");

    // Petite animation
    cards.forEach((card) => {
        card.style.opacity = "0.45";
    });

    const character = name.toLowerCase();

    // Vérifie que la page est bien ouverte dans Telegram
    if (tg) {
        tg.sendData(JSON.stringify({
            action: "choose_character",
            character: character
        }));

        // La Mini App se ferme après l'envoi
        setTimeout(() => {
            tg.close();
        }, 300);

    } else {
        // Test dans un navigateur normal
        alert(
            "Tu as choisi " + name +
            ". Pour envoyer le choix au bot, ouvre la Mini App depuis Telegram."
        );

        cards.forEach((card) => {
            card.style.opacity = "1";
        });
    }
}
