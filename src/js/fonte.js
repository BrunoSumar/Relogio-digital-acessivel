const estilo_html = document.body.parentElement;
const inc_font = document.getElementById("inc_font");
const dec_font = document.getElementById("dec_font");

function increase_font(){
    var atual = parseInt(estilo_html.style.fontSize);
    console.log(estilo_html.style.fontSize)
    estilo_html.style.fontSize = (++atual).toString() + 'px';
}

function decrease_font(){
    var atual = parseInt(estilo_html.style.fontSize);
    estilo_html.style.fontSize = (--atual).toString() + 'px';
}

dec_font.onclick = decrease_font;
inc_font.onclick = increase_font;
    
