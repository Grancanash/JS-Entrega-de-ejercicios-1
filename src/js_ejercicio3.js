class exercise3 {
    #textField;

    constructor() {
        this.#textField = document.getElementById('texto');
        this.initListiners();
        this.#textField.focus();
    }

    handlerAddText = () => {
        if (this.#textField.value !== '') {
            const li = document.createElement('li');
            li.textContent = this.#textField.value;
            const button = document.createElement('button');
            button.textContent = 'Eliminar';
            button.addEventListener('click', this.handlerDelete)
            li.append(button);
            document.getElementById('listEx3').append(li);
        }
        this.#textField.select();
    }

    handlerDelete = (event) => {
        event.target.parentNode.remove();
    }

    initListiners = () => {
        document.getElementById('btnAddText').addEventListener('click', this.handlerAddText);
        this.#textField.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                this.handlerAddText();
            }
        });
    }
}

export const initExercise = () => {
    const ex3 = new exercise3();
}
