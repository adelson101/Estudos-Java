function carregar(){
    const hora = new Date();
    document.getElementById('ihorario').innerHTML = `Agora são ${hora.getHours()} Horas.`;

    if ( hora.getHours()>=0 && hora.getHours()<12 ) {
        document.body.style.background = 'wheat';
        document.getElementById('Imagem').style.backgroundImage = "url('img/manha.webp')";
    } else if( hora.getHours()>=12 && hora.getHours()<=18 ) {
        document.body.style.background = 'orange';
        document.getElementById('Imagem').style.backgroundImage = "url('img/tarde.jpg')";
    } else {
        document.body.style.background = 'rgb(0, 7, 104)';
        document.getElementById('Imagem').style.backgroundImage = "url('img/noite.jpg')";
    }
}

function verificar(){
    const data = new Date();
    const idade = data.getFullYear()-Number(document.getElementById('iNascimento').value);

    if (document.getElementsByName('sexo')[0].checked && Number(document.getElementById('iNascimento').value)!=0)
        {
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('resultado-txt').innerHTML = `Detectado Homem que tem ${idade} Anos.`;
            if(idade>=50){
                document.getElementById('resultado').style.backgroundImage = "url('img/idoso.png')";   
            }
            else if(idade>=18){
                document.getElementById('resultado').style.backgroundImage = "url('img/homem.png')";   
            }
            else if(idade>=0){
                document.getElementById('resultado').style.backgroundImage = "url('img/garoto.png')";   
            }
            else
            {
                window.alert('Verificar se adicionou uma idade correta');
                document.getElementById('resultado-txt').innerHTML = `Valor Invalido!`;
                document.getElementById('resultado').style.display = 'none';
            }
        }

        else if (document.getElementsByName('sexo')[1].checked && Number(document.getElementById('iNascimento').value)!=0){
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('resultado-txt').innerHTML = `Detectado Mulher que tem ${idade} Anos.`;
            if(idade>=50){
                document.getElementById('resultado').style.backgroundImage = "url('img/idosa.png')";   
            }
            else if(idade>=18){
                document.getElementById('resultado').style.backgroundImage = "url('img/mulher.png')";   
            }
            else if(idade>=0){
                document.getElementById('resultado').style.backgroundImage = "url('img/garota.png')";   
            }
            else
            {
                window.alert('Verificar se adicionou uma idade correta');
                document.getElementById('resultado-txt').innerHTML = `Valor Invalido!`;
                document.getElementById('resultado').style.display = 'none';
            }
            
        }
        else {
            window.alert('Digite os dados.')
        }

    }