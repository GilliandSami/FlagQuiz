class Country {
    goodAnswers = new Set();

    constructor(data) {
        this.datas = data;
        this.flag = this.datas.flag;
        this.getGoodAnswers();
    }

    getGoodAnswers() {
        const translations = this.datas.translations;

        const tableauTranslation = Object.values(translations);

        tableauTranslation.forEach((translation) => {
            this.goodAnswers.add((translation.common).toLowerCase());
        });

        return this;
    }

    verifAnswer(chosenAnswer) {
        let result = false;
        const userAnswer = chosenAnswer.toLowerCase();

        if (this.goodAnswers.has(userAnswer)) {
            result = true;
        }

        return result;
    }

    getElementFlag() {
        const element = document.querySelector("#flag");

        const html = `<h1>${this.flag}</h1>`

        element.innerHTML = html;
    }

    getFlag() {
        return this.flag;
    }
}

export default Country;