let xCarros = [400, 400, 400]; //lista de Array se inicia do indice 0 = 400
let yCarros = [40, 100, 150];//indice 1 = 100
let velocidadeCarros = [2, 3, 4]; //indice 2 = 4

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}
function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        xCarros[i] -= velocidadeCarros[i];
    }
}
function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}
function passouTodaTela(xCarros) {
    return xCarros < - 50;
}

