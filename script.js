// 🌙 NOCTALIA — CONNEXION TELEGRAM

const tg = window.Telegram && window.Telegram.WebApp
    ? window.Telegram.WebApp
    : null;

// Initialisation de Telegram
if (tg) {
    tg.ready();
    tg.expand();
    console.log("✅ Telegram détecté !");
} else {
    console.log("⚠️ Telegram non détecté - mode navigateur");
}


// 👩 Fonction appelée lorsqu'un personnage est choisi
function chooseCharacter(name) {
    console.log("Personnage choisi :", name);

    const character = name.toLowerCase();

    // Vérifie que la Mini App est réellement ouverte dans Telegram
    if (!tg) {
        alert(
            "⚠️ Telegram n'a pas été détecté.\n\n" +
            "Ouvre Noctalia avec le bouton du bot Telegram."
        );
        return;
    }

    try {
        // Envoie le choix au bot Telegram
        tg.sendData(JSON.stringify({
            action: "choose_character",
            character: character
        }));

        console.log("📤 Choix envoyé à Telegram :", character);

        // Ferme la Mini App
        setTimeout(() => {
            tg.close();
        }, 500);

    } catch (error) {
        console.error("❌ Erreur :", error);

        alert("Une erreur est survenue : " + error.message);
    }
}
