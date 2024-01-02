function TelaInicial() { //Criar Tela Inicial - Criação do Titulo | Estilo do Titulo | Criação do Botão Jogar | estilo do Botão Jogar | Eventos do Botão Jogar

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

function TelaDeEscolha() { //Criar Tela de Escola
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

function TelaDeGame(tipo){ //Tela de Game
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
    //Criar Elemento
    CreateChild(corpo);

    let cabeca = document.createElement('div'); //Cabeça

    //Criar Id
    cabeca.setAttribute('id','cabeca');

    //style
    cabeca.style.border = '3px solid green';
    cabeca.style.height = '50px';
    cabeca.style.width = '50px';
    cabeca.style.borderRadius = '100px';
    cabeca.style.marginBottom = '3px';

    //Criar Elemento
    corpo.appendChild(cabeca); 

    let baseCima = document.createElement('div'); //Suporte para Braço

    //Criar Id
    baseCima.setAttribute('id','baseCima');

    //Criar Estilo
    StyleBasesCorpo(baseCima);

    //Criar Elemento
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

    //Criar Elemento
    baseCima.appendChild(BracoEsq);
    baseCima.appendChild(Tronco);
    baseCima.appendChild(BracoDir);

    let baseBaixo = document.createElement('div'); //Suporte para Baixo
    
    //Criar Estilo
    StyleBasesCorpo(baseBaixo);

    //Criar Elemento
    corpo.appendChild(baseBaixo);
    
    //Criar Id
    baseBaixo.setAttribute('id','baseBaixo');

    let PernaEsq = document.createElement('div'); //Perna Esquerda
    let PernaDir = document.createElement('div');  //Perna Direita

    //Criar Ids
    PernaEsq.setAttribute('id','pernaEsq');
    PernaDir.setAttribute('id','pernaDir');

    //Criar Estilos
    StylePernasEBraco(PernaEsq);
    StylePernasEBraco(PernaDir);

    //Criar Elemento
    baseBaixo.appendChild(PernaEsq);
    baseBaixo.appendChild(PernaDir);

    fetch("dados.json").then((response) => {
        response.json().then((dados) => {
            //Sorteia o numero do ID do animal que sera jogado
            let corte;
            let dica;

            switch (tipo) {
            case 0:
                    var sorteio = getRandomNum(dados.Animal.length);    //Sorteia o Animal
                    corte = dados.Animal[sorteio].nome.split("");       //Divide o nome em array
                    dica = dados.Animal[sorteio].dica;                  //Pega a dica do Json
                    CreateElementsInput(corte);                         //Cria Elemento Inputs com base no tamanho do array
            break;

            case 1:
                var sorteio = getRandomNum(dados.Jogo.length);      //Sorteia o Jogo
                corte = dados.Jogo[sorteio].nome.split("");         //Divide o nome em array
                dica = dados.Jogo[sorteio].dica;                    //Pega a dica do Json
                CreateElementsInput(corte);                         //Cria Elemento Inputs com base no tamanho do array
            break;

            case 2:
                var sorteio = getRandomNum(dados.Filme.length);     //Sorteia o Filme
                corte = dados.Filme[sorteio].nome.split("");        //Divide o nome em array
                dica = dados.Filme[sorteio].dica;                   //Pega a dica do Json
                CreateElementsInput(corte);                         //Cria Elemento Inputs com base no tamanho do array
            break;

            case 3:
                var sorteio = getRandomNum(dados.Futebol.length);   //Sorteia o Time de Futebol
                corte = dados.Futebol[sorteio].nome.split("");      //Divide o nome em array
                dica = dados.Futebol[sorteio].dica;                 //Pega a dica do Json
                CreateElementsInput(corte);                         //Cria Elemento Inputs com base no tamanho do array
            break;

           }

           //Estilo do Botao
           let botao = document.createElement('button');
           botao.innerText = 'VERIFICAR';
           botao.style.height = '50px';
           botao.style.width = '150px';
           styleButton(botao);

           //Estilo da Dica
           let CreateDica = document.createElement('p');
           CreateDica.style.color = 'green';
           CreateDica.style.fontFamily = 'Arial';
           CreateDica.style.fontWeight = 'bold';
           CreateDica.innerHTML = `"${dica}"`;

           //Cria os Elemenetos
           document.getElementById('container_Titulo').appendChild(CreateDica);
           document.getElementById('container_Titulo').appendChild(botao);
           console.log(corte.length);
           //Guarda os Acertos e Erros do usuario
           let correto = new Array(corte.length).fill(false);   //Cria um Array da quantidade da palavra e marca os true e false guardado no id da caixa do input
           let errado = 0;

           botao.addEventListener("mouseup", (clique) => {
            
                for (let i = 0; i < corte.length; i++) {
                    //Verifica se os caracteres guardados dentro de cada vetor está correto ou errado
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
                        document.getElementById(`Caixa-${i}`).focus();
                        //Marca pela quantidade de erros a parte que o personagem vai perdendo
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

                    //Conta o numero de corretos
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

//Funções de Estilos da tela

    //Função que cria os Inputs
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

    //Função que guarda o Estilo dos braços e pernas
    function StylePernasEBraco(corpo){
        corpo.style.border = '3px solid green';
        corpo.style.height = '100px';
        corpo.style.width = '20px';
        corpo.style.borderRadius = '100px';
    }

    //Função do Estilo dos membros do Corpo
    function StyleBasesCorpo(base){
        base.style.display = 'flex';
        base.style.gap = '3px';
    }

    //Função dos Estilo dos Botões
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

//Final da Funções de estilo da Tela


    //Funções da tela 

    //Função que sorteia o numero para o id da palavra
    function getRandomNum(max) {
        return Math.floor(Math.random() * max);
    }

    //Limpa a Tela
    function LimparTela() {
        var remove = document.getElementById('container_Titulo');

        while(remove.firstChild) {
            remove.removeChild(remove.firstChild);
        }
    }

    //Cria Elementos dentro da tela
    function CreateChild(tipo){
        document.getElementById('container_Titulo').appendChild(tipo);
    }

//Final das Funções da Tela