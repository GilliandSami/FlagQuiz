import shuffle from "./node_modules/lodash-es/shuffle.js";
import Game from "./Game.js";

async function gameCountries() {
    try {
        const countriesQuery = await fetch(`https://restcountries.com/v3.1/all`);
        const countriesRes = await countriesQuery.json();

        const shuffleCountries = shuffle(countriesRes);

        ///////////////////////////////////////////////////////////////////////////

        const game = new Game(shuffleCountries);
        console.log(game.currentCountry);

        const inputUser = document.querySelector("input[type='text']");
        const buttonForm = document.querySelector("button");

        buttonForm.addEventListener("click", (e) => {
            e.preventDefault();
            if (game.isFinished()) {
                alert(`Voici votre score : ${game.getScore()}`);
            } else {
                if (game.currentCountry.verifAnswer(inputUser.value)) {
                    game.changeScore();
                    game.nextCountry();
                } else {
                    game.nextCountry();
                }
            }
        });

        ///////////////////////////////////////////////////////////////////////////

    } catch (error) {
        console.log(error);
        throw new Error("Une erreur s'est glissée dans la réception de l'API")
    }
}

gameCountries();


