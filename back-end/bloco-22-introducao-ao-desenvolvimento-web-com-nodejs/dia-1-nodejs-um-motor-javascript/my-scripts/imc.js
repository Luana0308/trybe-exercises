const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura? ');

const alturaEmMetros = altura / 100
const alturaAoQuadrado = alturaEmMetros ** 2;
const resultadoImc = (peso / alturaAoQuadrado)

if(resultadoImc < 18.5){
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, abaixo do peso `)
}
else if (resultadoImc > 18.5 && resultadoImc < 24.9) {
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, peso normal `)
}
else if (resultadoImc > 25.0 && resultadoImc < 29.9) {
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, Acima do peso (sobrepeso) `)
}
else if (resultadoImc > 30.0 && resultadoImc < 34.9) {
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, Obesidade grau I `)
}
else if (resultadoImc > 35.0 && resultadoImc < 39.9) {
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, Obesidade grau II `)
}
else if (resultadoImc > 40.0) {
    console.log (`o seu resultado de imc é ${resultadoImc.toFixed(2)}, Obesidade graus III e IV `)
}
