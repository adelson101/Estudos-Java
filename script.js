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
    var genero = '';

    if( document.getElementById('iNascimento').value.length == 0 || document.getElementById('iNascimento').value > data.getFullYear() ) {
        window.alert('[ERROR] valor invalido');
    } else {
        
        document.getElementById('resultado').style.display = 'block';

        if (document.getElementsByName('sexo')[0].checked) {
                genero = 'Homem';

                if(idade>=50){
                    document.getElementById('resultado').style.backgroundImage = "url('img/idoso.png')";   
                }
                else if(idade>=18){
                    document.getElementById('resultado').style.backgroundImage = "url('img/homem.png')";   
                }
                else if(idade>=0){
                    document.getElementById('resultado').style.backgroundImage = "url('img/garoto.png')";   
                }
        } else if ( document.getElementsByName('sexo')[1].checked ) {
                genero = 'Mulher';

                if(idade>=50){
                    document.getElementById('resultado').style.backgroundImage = "url('img/idosa.png')";   
                }
                else if(idade>=18){
                    document.getElementById('resultado').style.backgroundImage = "url('img/mulher.png')";   
                }
                else if(idade>=0){
                    document.getElementById('resultado').style.backgroundImage = "url('img/garota.png')";   
                }
        }
        document.getElementById('resultado-txt').innerHTML = `Detectado ${genero} que tem ${idade} Anos.`;

    }

    }