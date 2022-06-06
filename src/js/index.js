/*
QUANDO CLICAR NA SETA AVANÇAR, TEM QUE ESCONDER TODAS AS IMAGENS
E MOSTRAR A PRÓXIMA IMAGEM;

    A IMAGEM ATUAL COMEÇA EM 0, PORQUE É A PRIMEIRA IMAGEM
    ASSIM QUE FOR CLICADO NA SETA AVANÇAR, PRECISO ADICIONAR MAIS 1 NO CONTADOR DE IMAGENS
    PARA PODER SABER QUAL IMAGEM MOSTRAR A SEGUIR (SEGUNDA IMAGEM);

    ESCONDER TODAS AS IMAGENS (REMOVENDO A CLASSE "MOSTRAR")   
        USANDO O DOM PARA REMOVEMOS A CLASSE.

    MOSTRAR A PRÓXIMA IMAGEM
        PEGAR TODAS AS IMAGENS, DESCOBRIR QUAL É A PRÓXIMA
        E COLOCAR A CLASSE MOSTRAR NELA
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;
const totalDeImagens = imagensPainel.length - 1;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;
    
    esconderImagens();
    mostrarImagem();   
});

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});
