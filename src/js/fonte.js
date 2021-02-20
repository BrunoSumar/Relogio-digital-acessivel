const html = document.body.parentNode;

//Necessário para poder acessar e alterar o tamanho da fonte
html.style.fontSize = window.getComputedStyle(html).fontSize;

const inc_font = document.getElementById("inc_font");
const dec_font = document.getElementById("dec_font");

//Aumenta a fonte em 1px
function increase_font(){
    var atual = parseInt(html.style.fontSize);
    html.style.fontSize = (++atual).toString() + 'px';
}

//Diminui em 1px
function decrease_font(){
    var atual = parseInt(html.style.fontSize);
    if(atual <= 25) return;
    html.style.fontSize = (--atual).toString() + 'px';
}

dec_font.onclick = decrease_font;
inc_font.onclick = increase_font;
    
