const readline = require('readline-sync');

function informacoes(){
    const distancia = readline.questionInt('qual a distancia?');
    const tempo = readline.questionInt('qual o tempo?');
    const result = resultado(distancia, tempo)
    console.log(`a velocidade do carro é ${result}`)
}

function resultado(distancia, tempo) {
    return distancia/ tempo
}

informacoes();