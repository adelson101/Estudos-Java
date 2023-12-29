function verificar() {
    
    let cont =  document.getElementById('Contagem');

    // Valida se todos os campos foram preenchediso

    if ( document.getElementById('iinicio').value.length==0 || document.getElementById('ifinal').value.length==0 || document.getElementById('ipasso').value.length==0 )
    {
        cont.innerHTML = '[ERROR] Falta valores';
    }

    // Final da Validação
    
    else 
    
    {   
        
        if(document.getElementById('ipasso').value <= 0) //Verifica se os passos são maiores que 0
        {

            window.alert('Invalido Conta apartir do PASSO 1');
            document.getElementById('ipasso').value = 1;

        }

            cont.innerHTML = 'Contando:<br>'

            if ( Number(document.getElementById('iinicio').value) < Number(document.getElementById('ifinal').value ) ) {
 
                //Contagem Crescente
                for (let i = Number(document.getElementById('iinicio').value) ; i <= Number(document.getElementById('ifinal').value) ; i += Number(document.getElementById('ipasso').value)) 
                {
                    cont.innerHTML += `<span>👉 ${i}</span>`;
                }

            }else {

                //Contagem Regressiva
                for (let i = Number(document.getElementById('iinicio').value) ; i >= Number(document.getElementById('ifinal').value) ; i -= Number(document.getElementById('ipasso').value )) 
                {
                    cont.innerHTML += `<span>👉 ${i}</span>`;
                }

            }
            
            cont.innerHTML += `<span>👉 🚩</span>`;

    }
}

function tabuada(){

    if (document.getElementById('inumero').value.length==0)

    {

       window.alert('Digite um numero');

    }

    else 
    {

        document.getElementById('icaixa').innerHTML = '';
        
        for (var i = 1 ; i <= 10 ; i++)
        {
            document.getElementById('icaixa').innerHTML += `<p>${document.getElementById('inumero').value } X ${i} = ${document.getElementById('inumero').value*i}</p>`
        }
    }
    
}