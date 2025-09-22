class exercise8 {
    constructor() {
        this.initEventListeners();
    }

    initEventListeners = () => {
        document.getElementById('paragraph').addEventListener('keyup', this.handlerKeyUp);
    }

    handlerKeyUp = (event) => {
        const paragraph = document.getElementById('paragraph');
        const arrParagraph = paragraph.value.split(/[ \n]/);
        const numLetters = [...paragraph.value].reduce((acumulator, letter) => letter.trim() ? acumulator + 1 : acumulator, 0);
        const numWords = arrParagraph.reduce((acumulator, word) => word ? acumulator + 1 : acumulator, 0);
        document.getElementById('nCharacters').innerText = numLetters;
        document.getElementById('nWords').innerText = numWords;
    }
}

export const initExercise = () => {
    const ex8 = new exercise8();
}