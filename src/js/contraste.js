// Stylesheet com a paleta de cores
const paleta = document.getElementById("paleta");

// Adicionando comoportamento ao botão
(()=> {
    // Botão que alterna estado do contraste
    let btn = document.getElementById("contraste");
    let ACon = true;
    btn.addEventListener('click',()=>{
        let href = "";
        if(ACon)
            href = paleta.href.replace('paleta','paletaAC');
        else
            href = paleta.href.replace('paletaAC','paleta');
        // Atribuindo nova paleta a página e inverte variavel de controle
        paleta.href = href;
        ACon = !ACon;
    })
})();


