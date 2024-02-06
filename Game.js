import Country from "./Country.js";

class Game {
    #score = 0;
    index = 0;
    scoreActuel = this.getScore();

    constructor(allCountries) {
        this.allCountries = allCountries;
        this.currentCountry = new Country(this.allCountries[this.index]);
        this.currentCountry.getElementFlag();
    }

    changeScore() {
        const affichageScore = document.querySelector("#score");
        this.#score++;

        const text = `Score: ${this.#score}`;
        affichageScore.textContent = text;

        return this;
    }

    getScore() {
        return this.#score;
    }

    isFinished() {
        let finished = false;

        if (this.index >= this.allCountries.length) {
            finished = true;
        }

        return finished;
    }

    nextCountry() {
        if (this.isFinished) {
            console.log("La partie est terminée...");
        } else {
            this.index = this.index + 1;
            this.currentCountry = new Country(this.allCountries[this.index]);
            this.currentCountry.getElementFlag();
        }
    }

}

export default Game;