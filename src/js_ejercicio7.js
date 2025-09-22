class passGenerator {
    #characters;

    constructor() {
        this.initListeners();
        this.#characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.<>/?\|~`;
    }

    initListeners = () => {
        document.getElementById('btnPassGenerator').addEventListener('click', (e) => {
            e.preventDefault();
            const lengthPass = document.getElementById('number').value;
            if (lengthPass < 4) {
                alert('El tamaño de la contraseña debe ser mayor o igual a 4');
            } else {
                let pass = '';
                for (let c = 0; c < lengthPass; c++) {
                    pass += this.#characters[Math.floor(Math.random() * this.#characters.length)];
                }
                document.getElementById('pass').value = pass;
            }
        });
    }
}

export const initExercise = () => {
    const myPassGenerator = new passGenerator();
}