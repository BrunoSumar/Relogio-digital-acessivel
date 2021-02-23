/*Recuperaçao por id das seguintes variaveis*/
var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

var start = document.getElementById('start');

/*Tempo atual*/
var temporizadorSeg;

var minAtual;
var segAtual;

var interval;

/*de 0 a 60 minutos*/
for (var i = 0; i<= 60; i++) {
    minutos.innerHTML+='<option value="'+dd(i)+'">'+dd(i)+'</option>';
}

/*de 0 a 60 segundos*/
for (var i = 0; i<= 60; i++) {
    segundos.innerHTML+='<option value="'+dd(i)+'">'+dd(i)+'</option>';
}

/*Evento do botao start*/
start.addEventListener('click',function(){
	minAtual = minutos.value;
	segAtual = segundos.value;
	if(minAtual + segAtual <= 0)
		return;

	display.childNodes[1].innerHTML = minAtual+":"+segAtual;

	interval = setInterval(function(){

		segAtual--;
		if(segAtual <=0){
			if(minAtual >0){
				minAtual--;
				segAtual = 59;

			}else{
				alert("Contagem chegou ao fim.");
				clearInterval(interval);
			}
		}

	    display.childNodes[1].innerHTML = dd(minAtual)+":"+dd(segAtual);
	},1000);
})
