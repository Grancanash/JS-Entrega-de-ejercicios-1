class exercise4 {
    #words;

    constructor() {
        this.#words = [
            'cielo', 'magma', 'tortuga', 'puente', 'cristal',
            'nube', 'ruido', 'pluma', 'relámpago', 'bosque',
            'arena', 'círculo', 'truco', 'piedra', 'viento',
            'mar', 'luz', 'espejo', 'sombra', 'llave',
            'río', 'cuadro', 'torre', 'jardín', 'sol',
            'ratón', 'camino', 'puerta', 'sonrisa', 'barco',
            'flor', 'hierro', 'fuego', 'montaña', 'reloj',
            'noche', 'estrella', 'laguna', 'hoja', 'planeta',
            'espada', 'cuerda', 'cabra', 'trueno', 'piel',
            'libro', 'pozo', 'madera', 'sueño', 'humo'
        ]

        this.renderList(this.#words);
        this.initListeners();
    }

    renderList = (words) => {
        let listEx4 = document.getElementById('listEx4');
        let newWordsList = '[';
        for (const word of words) {
            newWordsList += ', ' + word;
        }
        newWordsList += ']';
        newWordsList = newWordsList.replace(', ', '')
        listEx4.innerText = '';
        listEx4.append(newWordsList);
    }

    initListeners = () => {
        document.getElementById('texto').addEventListener('keyup', (event) => {
            const text = event.target.value;
            let newWords = [];
            newWords = this.#words.filter(palabra => palabra.includes(text));
            this.renderList(newWords);
        })
    }
}

export const initExercise = () => {
    const ex4 = new exercise4();
}
