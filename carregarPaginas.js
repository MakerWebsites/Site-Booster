

function entrarEmContato() {


    let alertaUsuario = "Você será direcionado para um dos nossos atendentes.";
    alert(alertaUsuario);
    let numero = "+5511968559541";
    let mensagem = "Olá";

    let url = `https://wa.me/${numero}/?text=${mensagem}`;
    let urlPaginaConstrucao = "paginaEmConstrucao.html";
    window.open(urlPaginaConstrucao);

}

function voltarAoInicio() {
    location = "index.html";
}

