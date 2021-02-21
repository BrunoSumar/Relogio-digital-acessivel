const e_segundo = document.getElementById("exibir_segundos")
const relogio = document.getElementById("rel");
const data = document.getElementById("data");
const titulo = document.querySelector("title");
const meses = ["janeiro","fevereiro", "março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
var tempo; // Função que vai alternar quando apertar botão de mostrar segundos ou não
var segundo = false; // Indica se esta mostrando os segundos ou não

const atualizaTempo = ()=>{
    var d = new Date()
    relogio.innerHTML = tempo(d);
    titulo.innerHTML = tempo(d) + " - Relógio acessível";
    data.innerHTML = d.getDate()+ " de " + meses[d.getMonth()] + " de " + d.getFullYear() + " (UTC+" + (d.getTimezoneOffset()/60).toFixed(0) + ")";
}

var alterna_tempo = function () {
    if (segundo == true) {
        tempo = function (d) { // Retorna o tempo com segundos
            return (dd(d.getHours()) + ":" + dd(d.getMinutes()) + ":" + dd(d.getSeconds()))
        };
        segundo = false;
    } else {
        tempo = function (d) { // Retorna o tempo sem segundos
            return (dd(d.getHours()) + ":" + dd(d.getMinutes()))
        }
        segundo = true;
    };
    atualizaTempo();
};

alterna_tempo(); // É preciso chamar uma vez para iniciar a variavel tempo

e_segundo.onclick = alterna_tempo; // Quando clicar vai trocar a definição da função tempo



window.setInterval(atualizaTempo, 1000);
