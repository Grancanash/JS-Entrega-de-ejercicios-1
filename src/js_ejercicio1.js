export const initExercise = () => {
    document.getElementById('btnChangeColor').addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
        document.querySelector('body').style.backgroundColor = randomColor;
    })
}
