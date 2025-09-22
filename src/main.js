import './sass/style.scss';

const btnVolver = document.getElementsByClassName('btnVolver')[0];

if (btnVolver) {
    btnVolver.addEventListener('click', () => window.location.href = './');
}

const pagina = document.querySelector('body').dataset.page;

if (pagina !== 'home') {
    import(`./js_${pagina}.js`).then(module => {
        module.initExercise();
    });
}