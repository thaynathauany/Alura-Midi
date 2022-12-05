function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
 
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado!')
    }
}

const listaDeTeclas  = document.querySelectorAll('.tecla');

//enquanto
for ( let contador  = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; 
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup =function () {
        tecla.classList.remove('ativa');
    }
}


/*Opção com Enquanto
//enquanto
while (contador < listaDeTecllas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);


    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    contador = contador + 1;

    console.log(contador);
}
*/