

function TelaInicial() {

    var Titulo = document.createElement('h1');
    Titulo.innerText = 'JOGO DA FORCA';
    Titulo.style.color = 'green';

    document.getElementById('container_Titulo').appendChild(Titulo);
    var botao = document.createElement('button');
    botao.innerText = 'JOGAR';
    styleButton(botao);

    botao.addEventListener("mouseout", (inicial) => {
        styleButton(botao);
    });

    botao.addEventListener("mouseenter", (selecionar) => {
        botao.style.backgroundColor = 'green';
        botao.style.transform = 'translateY(2px)';
        botao.style.boxShadow = '0px 3px 1px rgb(0, 59, 0)';
    });

    botao.addEventListener("mouseup", (clique) => {
        botao.style.backgroundColor = 'rgb(0, 90, 0)';
        botao.style.transform = 'translateY(5px)';
        botao.style.boxShadow = 'none';
        TelaDeEscolha();
    });

    document.getElementById('container_Titulo').appendChild(botao);

}

function styleButton(botao)
{
    botao.style.padding = '.7rem 4rem';
    botao.style.borderRadius = '100px';
    botao.style.backgroundColor = 'green';
    botao.style.boxShadow = '0px 5px 1px rgb(0, 59, 0)';
    botao.style.border = 'none';
    botao.style.fontSize = '1.2rem';
    botao.style.fontWeight = 'bold';
    botao.style.transform = 'translateY(0px)';
}

function TelaDeEscolha() {
    var remove = document.getElementById('container_Titulo');
    while(remove.firstChild) {
        remove.removeChild(remove.firstChild);
    }
}