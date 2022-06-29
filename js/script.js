const pagesHTMLCollection = document.querySelectorAll('*[data^="page"]');
const pagesArray = Array.from(pagesHTMLCollection);

function initPagePlacement(pagesHTMLCollection) {
  pagesHTMLCollection.forEach((element, key) => {
    element.id = `page-${key + 1}`;
  });

  pagesHTMLCollection[0].classList.add('active');
  pagesHTMLCollection[1].classList.add('pre-active');
  pagesHTMLCollection[pagesHTMLCollection.length - 1].classList.add('backward-pre-active');
}
initPagePlacement(pagesHTMLCollection);

function initPageManipulation(pagesArray) {

  document.body.addEventListener('keydown', function(e) {
      //Verifica se a tecla é para direita ou para a esquerda
      switch (e.keyCode){
        case 37:

          moveBackward();
          break;

        case 39:

          moveForward();
          break;
      }
    }
  )

  //Faz a manipulação das páginas
  function moveForward() {

    let activeElement = pagesArray.indexOf(document.querySelector('.active'));

    pagesArray[activeElement].classList.remove('active');

    if (pagesArray[pagesArray.length - 1] == document.querySelector('.backward-pre-active')) {

      //retira o backward-pre-active do ultimo item
      pagesArray[pagesArray.length - 1].classList.remove('backward-pre-active');
    }

    pagesArray[activeElement].classList.add('backward-pre-active');


    if(activeElement + 2 !== pagesArray.length && activeElement + 1 !== pagesArray.length) {

      //torna o proximo item em ativo
      pagesArray[activeElement + 1].classList.remove('pre-active');
      pagesArray[activeElement + 1].classList.add('active');


      if (activeElement !== 0) {
        //retira o backward-pre-active do item anterior
        pagesArray[activeElement - 1].classList.remove('backward-pre-active');
      }
      //torna o item a frente do proximo em pre-ativo
      pagesArray[activeElement + 2].classList.add('pre-active');


    } else if (activeElement + 1 !== pagesArray.length) {

      //torna o proximo item em ativo
      pagesArray[activeElement + 1].classList.remove('pre-active');
      pagesArray[activeElement + 1].classList.add('active');

      //retira o backward-pre-active do item anterior
      pagesArray[activeElement - 1].classList.remove('backward-pre-active');

      //torna o primeiro item em pre-ativo
      pagesArray[0].classList.add('pre-active');


    } else {

      //torna o primeiro item em ativo
      pagesArray[activeElement].classList.remove('active');
      pagesArray[0].classList.add('active');

      //retira o pre-active do primeiro item
      pagesArray[0].classList.remove('pre-active');

      //torna o segundo item em pre-active
      pagesArray[1].classList.add('pre-active');

      //retira o backward-pre-active do item anterior
      pagesArray[activeElement - 1].classList.remove('backward-pre-active');


    }

  }

  function moveBackward() {

    let activeElement = pagesArray.indexOf(document.querySelector('.active'));

    //torna o item atual em pre-active
    pagesArray[activeElement].classList.remove('active');
    pagesArray[activeElement].classList.add('pre-active');

    if(pagesArray[activeElement] == pagesArray[0]) {

      //remove o pre-active do segundo item
      pagesArray[activeElement + 1].classList.remove('pre-active');

      //remove o back-pre-act do ultimo item
      pagesArray[pagesArray.length - 1].classList.remove('backward-pre-active');

      //torna o ultimo item em ativo
      pagesArray[pagesArray.length - 1].classList.add('active');

      //torna o penultimo item em pre-active
      pagesArray[pagesArray.length - 2].classList.add('backward-pre-active');

      console.log('first item stage');

    } else if(pagesArray[activeElement] == pagesArray[pagesArray.length - 1]) {

      //remove o backward-pre-active do item anterior
      pagesArray[activeElement - 1].classList.remove('backward-pre-active');

      //torna o item anterior em ativo
      pagesArray[activeElement - 1].classList.add('active');

      //torna o item anterior do anterior em back-pre-act
      pagesArray[activeElement - 2].classList.add('backward-pre-active');

      //remove o pre-active do primeiro item
      pagesArray[0].classList.remove('pre-active')

      console.log('last item stage');

    } else if(pagesArray[activeElement] == pagesArray[1]) {
      
      //remove o pre-active do proximo item
      pagesArray[activeElement + 1].classList.remove('pre-active');

      //torna o item anterior em ativo
      pagesArray[activeElement - 1].classList.add('active');

      //remove o backward-pre-active do item anterior
      pagesArray[activeElement - 1].classList.remove('backward-pre-active');

      //torna o ultimo item da array em ativo
      pagesArray[pagesArray.length - 1].classList.add('backward-pre-active');


      console.log('second item stage');

    } else if(pagesArray[activeElement - 1] !== undefined) {

      //remove o pre-active do proximo item
      pagesArray[activeElement + 1].classList.remove('pre-active');

      //remove o backward-pre-active do item anterior
      pagesArray[activeElement - 1].classList.remove('backward-pre-active');

      //torna o item anterior em ativo
      pagesArray[activeElement - 1].classList.add('active');

      //torna o item anterior do anterior em back-pre-act
      pagesArray[activeElement - 2].classList.add('backward-pre-active');

      console.log('mid items stage');

    }


    
  }
}
initPageManipulation(pagesArray);