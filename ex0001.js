function verificar() {
    
    let cont =  document.getElementById('Contagem');
    let diferente = true;

    if ( document.getElementById('iinicio').value.length==0 || document.getElementById('ifinal').value.length==0 || document.getElementById('ipasso').value.length==0 )
    {
        cont.innerHTML = '[ERROR] Falta valores';
    }
    
    else 
    
    {   
        
        do {

        if(Number(document.getElementById('ipasso').value)>0){
            
            cont.innerHTML = 'Contando:<br>'

            for (let i = Number(document.getElementById('iinicio').value) ; i <= Number(document.getElementById('ifinal').value) ; i=i+Number(document.getElementById('ipasso').value)) 
            {
                cont.innerHTML += `<span>👉 ${i}</span>`;
            }
            cont.innerHTML += `<span>👉 🚩</span>`;

            diferente = false;

        }
        else 
        {
            window.alert('Invalido Conta apartir do PASSO 1');
            document.getElementById('ipasso').value = 1;
            diferente = true;
        }

        } while(diferente)

    }
}

function tabuada(){
    if (document.getElementById('inumero').value.length==0){
       window.alert('Digite um numero');
    } else {
        document.getElementById('icaixa').innerHTML = '';
        for (var i = 1 ; i <= 10 ; i++){
            document.getElementById('icaixa').innerHTML += `<p>${document.getElementById('inumero').value } X ${i} = ${document.getElementById('inumero').value*i}</p>`
        }
    }
    
    
}