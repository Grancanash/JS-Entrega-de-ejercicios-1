class Timer {
    #seconds;
    #interval;

    constructor() {
        this.#seconds = 0;
        this.#interval = null;
        this.initListeners();
    }

    refreshScreen = () => {
        let hrs = String(Math.floor(this.#seconds / 3600)).padStart(2, '0');
        let min = String(Math.floor(this.#seconds / 60)).padStart(2, '0');
        let sec = String(this.#seconds % 60).padStart(2, '0');
        document.getElementById('timerEx6').textContent = `${hrs}:${min}:${sec}`;
    }

    startTimer = () => {
        if (this.#interval) return; // evita múltiples intervalos
        this.#interval = setInterval(() => {
            this.#seconds++;
            this.refreshScreen();
        }, 1000);
    }

    pauseTimer = () => {
        clearInterval(this.#interval);
        this.#interval = null;
    }

    resetTimer = () => {
        this.pauseTimer();
        this.#seconds = 0;
        this.refreshScreen();
    }

    initListeners = () => {
        document.getElementById('btnInitTimer').addEventListener('click', () => this.startTimer());
        document.getElementById('btnPauseTimer').addEventListener('click', () => this.pauseTimer());
        document.getElementById('btnResetTimer').addEventListener('click', () => this.resetTimer());
    }

}

export const initExercise = () => {
    const myTimer = new Timer();
}
