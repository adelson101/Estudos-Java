

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

        CreateElements[i].addEventListener("mouseup", (clique) => {
            TelaDeGame(i);
        });
    }

    
}

function TelaDeGame(tipo){
    LimparTela();

    let BotaoVoltar = document.createElement('div');
    BotaoVoltar.innerHTML = 'VOLTAR';
    BotaoVoltar.style.padding = '.5rem';
    BotaoVoltar.style.width = '100px';
    BotaoVoltar.style.textAlign = 'center';
    BotaoVoltar.style.margin = 'auto';
    BotaoVoltar.style.marginBottom = '1rem';
    styleButton(BotaoVoltar);
    CreateChild(BotaoVoltar);

    BotaoVoltar.addEventListener("mouseup" , (clique) => {
        TelaDeEscolha();
    })

    let corpo = document.createElement('div'); //Corpo
    
    //Criar Estilos
    corpo.style.display = 'flex';
    corpo.style.flexDirection = 'column';
    corpo.style.alignItems = 'center';
    //Criar Ids
    corpo.setAttribute('id','corpo');

    CreateChild(corpo);

    let cabeca = document.createElement('div'); //Cabeça
    cabeca.setAttribute('id','cabeca');

    //style
    cabeca.style.border = '3px solid green';
    cabeca.style.height = '50px';
    cabeca.style.width = '50px';
    cabeca.style.borderRadius = '100px';
    cabeca.style.marginBottom = '3px';

    corpo.appendChild(cabeca);

    let baseCima = document.createElement('div'); //Suporte para Braço
    baseCima.setAttribute('id','baseCima');
    StyleBasesCorpo(baseCima);
    corpo.appendChild(baseCima);

    let Tronco = document.createElement('div'); //Tronco
    let BracoEsq = document.createElement('div'); //Braço Esquerdo
    let BracoDir = document.createElement('div'); //Braço Direito

    //Criar Ids
    Tronco.setAttribute('id','tronco');
    BracoEsq.setAttribute('id','bracoEsq');
    BracoDir.setAttribute('id','bracoDir');

    //Criar Estilos
    StylePernasEBraco(BracoEsq);
    StylePernasEBraco(BracoDir);
    Tronco.style.border = '3px solid green';
    Tronco.style.height = '100px';
    Tronco.style.width = '50px';
    Tronco.style.borderRadius = '30px';

    baseCima.appendChild(BracoEsq);
    baseCima.appendChild(Tronco);
    baseCima.appendChild(BracoDir);

    let baseBaixo = document.createElement('div'); //Suporte para Baixo
    StyleBasesCorpo(baseBaixo);
    corpo.appendChild(baseBaixo);
    baseBaixo.setAttribute('id','baseBaixo');

    let PernaEsq = document.createElement('div'); //Perna Esquerda
    let PernaDir = document.createElement('div');  //Perna Direita

    //Criar Ids
    PernaEsq.setAttribute('id','pernaEsq');
    PernaDir.setAttribute('id','pernaDir');

    //Criar Estilos
    StylePernasEBraco(PernaEsq);
    StylePernasEBraco(PernaDir);

    baseBaixo.appendChild(PernaEsq);
    baseBaixo.appendChild(PernaDir);

    fetch("dados.json").then((response) => {
        response.json().then((dados) => {
           let corte;
           let dica;
            switch (tipo) {
            case 0:
                var sorteio = getRandomNum(dados.Animal.length);
                corte = dados.Animal[sorteio].nome.split("");
                dica = dados.Animal[sorteio].dica;
                CreateElementsInput(corte);
            break;

            case 1:
                
            break;

            case 2:
                
            break;

            case 3:
                
            break;

            default:

            break;
           }

           let botao = document.createElement('button');
           botao.innerText = 'VERIFICAR';
           botao.style.height = '50px';
           botao.style.width = '150px';
           styleButton(botao);

           let CreateDica = document.createElement('p');
           CreateDica.style.color = 'green';
           CreateDica.style.fontFamily = 'Arial';
           CreateDica.style.fontWeight = 'bold';
           CreateDica.innerHTML = `"${dica}"`;

           document.getElementById('container_Titulo').appendChild(CreateDica);
           document.getElementById('container_Titulo').appendChild(botao);
           
           let correto = new Array(corte.length).fill(false);
           let errado = 0;
           botao.addEventListener("mouseup", (clique) => {
            
                for (let i = 0; i < corte.length; i++) {
                    if( corte[i].toUpperCase() == document.getElementById(`Caixa-${i}`).value.toUpperCase() && document.getElementById(`Caixa-${i}`).value.length!=0 ) {
                        correto[i] = true;
                        document.getElementById(`Caixa-${i}`).style.backgroundColor = '#34eb61';
                        document.getElementById(`Caixa-${i}`).style.transition = 'background-color 0.5s';
                        document.getElementById(`Caixa-${i}`).innerHTML = `${corte[i].toUpperCase()}`;
                        document.getElementById(`Caixa-${i}`).readOnly = true;
                    }
                    if( corte[i].toUpperCase() != document.getElementById(`Caixa-${i}`).value.toUpperCase() && document.getElementById(`Caixa-${i}`).value.length!=0 ) 
                    {
                        errado++;
                        console.log(errado);
                        document.getElementById(`Caixa-${i}`).style.backgroundColor = 'red';
                        document.getElementById(`Caixa-${i}`).style.transition = 'background-color 0.5s';
                        document.getElementById(`Caixa-${i}`).value = '';

                        switch (errado) {
                            case 1:
                                document.getElementById('cabeca').style.background = 'green';
                            break;
                            case 2:
                                document.getElementById('tronco').style.background = 'green';
                            break;
                            case 3:
                                document.getElementById('bracoEsq').style.background = 'green';
                            break;
                            case 4:
                                document.getElementById('bracoDir').style.background = 'green';
                            break;
                            case 5:
                                document.getElementById('pernaEsq').style.background = 'green';
                            break;
                            case 6:
                                document.getElementById('pernaDir').style.background = 'green';
                                TelaDeGame(tipo);
                            break;
                        }
                    }

                    const countCorreto = correto.filter(Boolean).length;
                    if (countCorreto==corte.length) {
                        botao.innerHTML = '';
                        botao.innerHTML = `<img src='img/done_FILL0_wght400_GRAD0_opsz24.svg'>`;
                        botao.addEventListener('mouseup',(clique) => {
                            TelaDeGame(tipo);
                        });
                    }
                }

           })

        })
    })

}

function CreateElementsInput(corte) {

    let divBase = document.createElement('div');
    divBase.style.display = 'flex';
    divBase.style.gap = '.8rem';
    divBase.style.marginTop = '1rem';
    divBase.style.justifyContent = 'center';
    CreateChild(divBase);

    for (let i = 0; i < corte.length; i++) {
        let letras = document.createElement('input');
        letras.setAttribute('id',`Caixa-${i}`);
        letras.style.width = '50px';
        letras.style.height = '70px';
        letras.style.fontSize = '1.5rem';
        letras.style.fontWeight = 'bold';
        letras.style.textAlign = 'center';
        letras.style.border = 'none';
        letras.style.background = 'green';
        letras.style.color = 'white';
        letras.style.borderRadius = '8px';
        letras.maxLength = 1 ;
        divBase.appendChild(letras);
    }

}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function StylePernasEBraco(corpo){
    corpo.style.border = '3px solid green';
    corpo.style.height = '100px';
    corpo.style.width = '20px';
    corpo.style.borderRadius = '100px';
}

function StyleBasesCorpo(base){
    base.style.display = 'flex';
    base.style.gap = '3px';
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