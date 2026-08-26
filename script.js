// 🌙 NOCTALIA — MINI APP TELEGRAM

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function chooseCharacter(name) {
    const character = name.toLowerCase();

    // Vérifie que la Mini App est ouverte depuis Telegram
    if (tg && tg.initData) {
        tg.sendData(JSON.stringify({
            action: "choose_character",
            character: character
        }));

        setTimeout(() => {
            tg.close();
        }, 500);
    } else {
        // Mode test dans un navigateur normal
        alert(
            "🌙 Tu as choisi " + name +
            " !\n\nOuvre Noctalia depuis Telegram pour envoyer ton choix au bot."
        );
    }
}
