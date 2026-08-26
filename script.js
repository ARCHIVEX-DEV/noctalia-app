<script>
    // Récupère la Mini App Telegram
    const tg = window.Telegram && window.Telegram.WebApp
        ? window.Telegram.WebApp
        : null;

    // Initialise Telegram
    if (tg) {
        tg.ready();
        tg.expand();
    }

    function chooseCharacter(name) {
        // Si Noctalia n'est pas ouverte depuis Telegram
        if (!tg || !tg.initData) {
            alert("⚠️ Ouvre Noctalia depuis le bouton de ton bot Telegram.");
            return;
        }

        const character = name.toLowerCase();

        // Envoie le personnage choisi au bot
        tg.sendData(JSON.stringify({
            action: "choose_character",
            character: character
        }));

        // Ferme la Mini App après l'envoi
        setTimeout(function () {
            tg.close();
        }, 500);
    }
</script>
