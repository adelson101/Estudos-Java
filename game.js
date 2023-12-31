

function TelaInicial() {

    var Titulo = document.createElement('h1');
    Titulo.innerText = 'JOGO DA FORCA';
    Titulo.style.color = 'green';

    CreateChild(Titulo);
    var botao = document.createElement('button');
    botao.innerText = 'JOGAR';
    botao.style.padding = '.7rem 4rem';

    styleButton(botao);

    CreateChild(botao);

    botao.addEventListener("mouseup", (clique) => {
        TelaDeEscolha();
    });

}

function TelaDeEscolha() {
    LimparTela();

    let nomesIds = ['Animal','Jogo','Filme','Futebol'];
    let CreateElements = [];
    
    for (let i = 0; i < nomesIds.length; i++) {
        CreateElements[i] = document.createElement('button');
        CreateElements[i].innerText = nomesIds[i];
        CreateElements[i].style.height = '200px';
        CreateElements[i].style.width = '200px';
        CreateElements[i].style.margin = '.5rem';
        styleButton(CreateElements[i]);
        CreateChild(CreateElements[i]);
    }

    
}

function LimparTela() {
    var remove = document.getElementById('container_Titulo');

    while(remove.firstChild) {
        remove.removeChild(remove.firstChild);
    }
}

function CreateChild(tipo){
    document.getElementById('container_Titulo').appendChild(tipo);
}

function styleButton(botao)
{
    botao.style.borderRadius = '50px';
    botao.style.backgroundColor = 'green';
    botao.style.boxShadow = '0px 5px 1px rgb(0, 59, 0)';
    botao.style.border = 'none';
    botao.style.fontSize = '1.2rem';
    botao.style.fontWeight = 'bold';
    botao.style.transform = 'translateY(0px)';

    botao.addEventListener("mouseout", (inicial) => {
        styleButton(botao);
    });

    botao.addEventListener("mouseenter", (selecionar) => {
        botao.style.transform = 'translateY(2px)';
        botao.style.boxShadow = '0px 3px 1px rgb(0, 59, 0)';
        botao.style.backgroundColor = 'rgb(0, 116, 0)';
    });

}