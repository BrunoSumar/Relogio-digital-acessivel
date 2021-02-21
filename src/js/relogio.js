const e_segundo = document.getElementById("exibir_segundos")
const relogio = document.getElementById("rel");

var tempo; // Função que vai alternar quando apertar botão de mostrar segundos ou não
var segundo = true; // Indica se esta mostrando os segundos ou não

var alterna_tempo = function () {
    if (segundo == true) {
	tempo = function () { // Retorna o tempo com segundos
	    var d = new Date();
	    return (dd(d.getHours()) + ":" + dd(d.getMinutes()) + ":" + dd(d.getSeconds()))
	};
	segundo = false;
	e_segundo.innerHTML = "Ocultar segundos";
    } else {
	tempo = function () { // Retorna o tempo sem segundos
	    var d = new Date();
	    return (dd(d.getHours()) + ":" + dd(d.getMinutes()))
	}
	segundo = true;
	e_segundo.innerHTML = "Exibir segundos";
    };
    relogio.innerHTML = tempo();
};

alterna_tempo(); // É preciso chamar uma vez para iniciar a variavel tempo

e_segundo.onclick = alterna_tempo; // Quando clicar vai trocar a definição da função tempo

window.setInterval(() => {relogio.innerHTML = tempo()}, 1000);
