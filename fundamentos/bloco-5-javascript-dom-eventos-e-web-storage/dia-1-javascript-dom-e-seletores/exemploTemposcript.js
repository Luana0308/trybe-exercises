const h1 = document.getElementsByTagName('h1')[0].style.backgroundColor = 'green'
const quadroUrgenteImportante = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'purple'
const quadroNaoUrgenteImportante = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'pink';
const tituloUrgenteImportante1 = document.getElementsByTagName('h3');
for (let index = 0; index < tituloUrgenteImportante1.length; index += 1) {
    tituloUrgenteImportante1[index].style.backgroundColor = 'orange';
  }