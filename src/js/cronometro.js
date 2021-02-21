let iniciar = document.querySelector('.iniciar');
let parar = document.querySelector('.parar');
let zerar = document.querySelector('.zerar');
let clock = document.querySelector('.clock');
parar.disabled = true;
zerar.disabled = true;
let date = new Date();
date.setHours(0, 0, 0);
let time;
let play;

Display(date, time);

iniciar.addEventListener('click', function () {
    iniciar.disabled = true;
    parar.disabled = false;
    zerar.disabled = false;
    play = setInterval(function () {
        Start(date, time);
        Display(date, time);
    }, 1000);
});
parar.addEventListener('click', function () {
    iniciar.disabled = false;
    parar.disabled = true;
    zerar.disabled = false;
    clearInterval(play);
});
zerar.addEventListener('click', function () {
    iniciar.disabled = false;
    parar.disabled = true;
    zerar.disabled = true;
    clearInterval(play);
    date.setHours(0, 0, 0);
    Display(date, time);
})

function Display(data, hora) {
    hora = data.toString();
    hora = hora.slice(hora.indexOf(' 00:'), hora.indexOf(' GMT'));
    clock.textContent = hora;
};

function Start(data, hora) {
    hora = data.setSeconds(data.getSeconds() + 1);
}
