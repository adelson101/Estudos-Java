function verificar() {
    const passos = Number(document.getElementById('ipasso').value);
    const inicio = Number(document.getElementById('iinicio').value);
    const final = Number(document.getElementById('ifinal').value);
    let cont =  document.getElementById('Contagem');

    // Valida se todos os campos foram preenchediso
    if ( document.getElementById('iinicio').value.length==0 || document.getElementById('ifinal').value.length==0 || document.getElementById('ifinal').value.length==0 )
    {
        cont.innerHTML = '[ERROR] Falta valores';
    }

    // Final da Validação
    
    else 
    
    {   
        
        if( passos <= 0) //Verifica se os passos são maiores que 0
        {

            window.alert('Invalido Conta apartir do PASSO 1');
            passos = 1;

        }

            cont.innerHTML = 'Contando:<br>'

            if ( inicio < final  ) {
 
                //Contagem Crescente
                for ( let i = inicio ; i <= final ; i += passos ) 
                {
                    cont.innerHTML += `<span>👉 ${i}</span>`;
                }

            }else {

                //Contagem Regressiva
                for (let i = inicio ; i >= final ; i -= passos ) 
                {
                    cont.innerHTML += `<span>👉 ${i}</span>`;
                }

            }
            
            cont.innerHTML += `<span>👉 🚩</span>`;

    }
}

function tabuada(){

    const numero = document.getElementById('inumero');
    const caixa = document.getElementById('icaixa');

    if (numero.value.length==0)

    {

       window.alert('Digite um numero');

    }

    else 
    {

        caixa.innerHTML = '';
        
        for (var i = 1 ; i <= 10 ; i++)
        {
            caixa.innerHTML += `<p>${caixa.value } X ${i} = ${caixa.value*i}</p>`
        }
    }
    
}