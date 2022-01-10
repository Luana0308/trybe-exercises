// JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.
function retornaTrue(a,b) {
    if(a === true && b === true){
        return true
    } return false 
}

// Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

function calArea(base, altura) {
 const calculo = ((base * altura) / 2);
 return calculo
}

//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
function splitSentence(string) {
    return string.split(' ')
}

// Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(array) {
    const ultimoItem = array[array.length -1]
    const primeiroItem = array[0]
    return ultimoItem + ', ' + primeiroItem
};

// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function foolballPoints(wins,ties) {
    const vitoria = wins * 3;
    const empates = ties * 1; 
    return vitoria + empates
}

// Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
//Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
function highestCount(array) {
    let maiorNumero = array[0];
    for (let index = 0; index < array.length; index++) {
        if(maiorNumero < array[index]){
            maiorNumero = array[index]
        }
    }
    let repeticoesNumero = 0;
    for (let index = 0; index < array.length; index++) {
        if(maiorNumero === array[index]) {
           repeticoesNumero = repeticoesNumero + 1
        }
    }
    return repeticoesNumero;
}

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

function catAndMouse(cat1,cat2) {
    if (cat1 < cat2) {
        return 'cat1'
    } 
    else if (cat2 < cat1) {
        return 'cat2'
    } 
    else if (cat1 === cat2) {
        return "os gatos trombam e o rato foge"
    }
}

//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
//Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
//Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";

function fizzBuzz(array) {
    let resultado = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
            resultado += "fizz "
        }
        else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
            resultado += "buzz "
        }
        else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
            resultado += "fizzBuzz "
        }
        else if(array[index] % 3 !== 0 && array[index] % 5 !== 0) {
            resultado += "bug! "
        }
    }
    let novo = resultado.substring(0,resultado.length -1)
    return novo.split(' ');
}

//Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
function encode(string) {
    let result = string;
    for(let i=0; i<= string.length; i+=1){
      if(result[i] === "a"){
        result = string.replace(/a/g,1)
      }
      else if (result[i] === "e"){
        result = result.replace(/e/g,2)
      }
      else if(result[i] === "i"){
        result = result.replace(/i/g,3)
      }
      else if(result[i] === "o"){
        result = result.replace(/o/g,4)
      }
      else if(result[i] === "u"){
        result = result.replace(/u/g,5)
      }
    }
    return result
}
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.
function listaTecnologia(array,string) {
   const arrayOdenado = array.sort();
   let result = []
   for (let index = 0; index < arrayOdenado.length; index++) {
           result.push({
               tech: array[index],
               name: string
           })
       }
   return result;
}

// 