class Calculator {
    constructor() {
        this.initListeners();
    }

    initListeners = () => {
        document.getElementById('operadoresEx5').addEventListener('click', (event) => {
            const element = event.target;
            if (element.matches('button')) {
                this.operate(element);
            }
        });
    }

    operate = (element) => {
        let result = 0;
        const operand1 = parseFloat(document.getElementById('operand1').value);
        const operand2 = parseFloat(document.getElementById('operand2').value);
        if (isNaN(operand1) || isNaN(operand2)) {
            alert('Introduce valores correctos, por favor');
        } else {
            document.getElementById('result').value = 0;
            switch (element.dataset.operation) {
                case 'add':
                    result = operand1 + operand2;
                    break;
                case 'subtract':
                    result = operand1 - operand2;
                    break;
                case 'multiply':
                    result = operand1 * operand2;
                    break;
                case 'divide':
                    if (operand2 === 0) alert('No se puede dividir por cero');
                    else result = operand1 / operand2;
                    break;

            }
            document.getElementById('result').value = result;
        }
    }


}

export const initExercise = () => {
    const calculator = new Calculator();
}
