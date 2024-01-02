
var numrs = [];

function Adicionar() {
    let numero = document.getElementById('inumeros');

    if (numero.value.length==0) {
        window.alert('Digite um valor');
    }else {
        if (numero.value>=0 && numero.value<=100){
            if (!includes(numrs,Number(numero.value))) {
                numrs.push(Number(document.getElementById('inumeros').value));
                var op = document.createElement('option');
                op.innerHTML = `Valor ${Number(numrs[numrs.length-1])} adicionado.`;
                document.getElementById('ivalores').appendChild(op);
                numero.value = '';
            } else {
                window.alert('Numero já cadastrado');
                numero.value = '';
            }
        }else {
            window.alert('Valor Invalido');
            numero.value = '';
        }
    }
}

function finalizar() {
    let soma = 0;
    let max = numrs[0];
    let min = numrs[0];
    if(numrs!=0){
        for (var i in numrs) 
        {
            soma += numrs[i];
            if(numrs[i]>max){
                max = numrs[i];
            }
            if(numrs[i]<min){
                min = numrs[i];
            }
        }
        let create = document.getElementById('resultados');
        create.innerHTML = '';
        create.innerHTML += `<p> Ao Todo, temos ${numrs.length} numeros cadastrados. </p>`;
        create.innerHTML += `<p> O maior valor informado foi ${max}. </p>`;
        create.innerHTML += `<p> O menor valor informado foi ${min}. </p>`;
        create.innerHTML += `<p> Somando todos os valroes, temos ${soma}. </p>`;
        create.innerHTML += `<p> A média dos valores digitados é ${soma/numrs.length}. </p>`;
    } else {
        window.alert('Digite os Valores');
    }
}

function includes(numrs, verificar) {
    for (let i = 0; i < numrs.length; i++) {
        if (numrs[i] == verificar) {
            return true;
        }
    }
}