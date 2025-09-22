export const initExercise = () => {
    let counter = 0;
    document.getElementById('btnCountClicks').addEventListener('click', () => {
        counter++;
        document.getElementById('counter').innerText = counter;
    });
}
