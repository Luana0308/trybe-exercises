// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindro(parametro) {
    if(parametro === parametro.reverse()){
        return true
    } else {
        return false 
    }
}
console.log(palindro(['arara']));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorIndice(array) {
    let indice = 0;
    for (let index in array) {
        if(array[indice] < array[index]){
             indice = index
        }
    }
    return indice
}
console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorIndice(arrayinteiros) {
    let menorNumero = 0;
    for (const index in arrayinteiros) {
        if(arrayinteiros[index] < arrayinteiros[menorNumero]){
            menorNumero = index
        }
    }
    return menorNumero
}
console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]))

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorCaracteres(arrayNomes) {
    let maiornome = arrayNomes[0];
    for (let index = 1; index < arrayNomes.length; index++) {
        if(maiornome.length < arrayNomes[index].length){
            maiornome = arrayNomes[index];
        }
    }
    return maiornome
}
console.log(maiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
  
  let a = 5;
let b = 2;
b -= a;
console.log(b);
