//array-exemplo1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

//array-exemplo2
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');
console.log(indexOfPortfolio);

//array-exemplo3
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("contato")
console.log(menu3);

//for-exemplo1
 let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index =0; index <= groceryList.length -1; index +=1){
 console.log(groceryList[index])
}

/* - dessa forma eu consigo ver todo o conteudo impresso em forma de string
for (item in groceryList){
    console.log(item)
}
*/
//exericicios 1 ao 7
//exericicio1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for( let index=0; index< numbers.length; index++){
console.log(numbers[index])
}

//exericicio2
for(let i = 0; i <numbers.length; i++){
resultado += numbers[i]
console.log(resultado)
}
//exercicio3
const mediaAritimetica = (resultado / numbers.length)

//exercicio4
if (mediaAritimetica >= 20){
    console.log ('valor maior que 20')
} else{
    console.log('menor que 20')
}
//exercicio5
let maiornumero = numbers[0];
for( let index=0; index< numbers.length; index++){
    if(numbers[index] > maiornumero){
        maiornumero = numbers[index]
}
}
console.log("o maior numero é " + maiornumero)

//exercicio6
let valoresImpares = [];
for (let index=0; index< numbers.length; index++){
    if(numbers[index] % 2 != 0){
       valoresImpares.push(numbers[index])
    }
}
console.log("o numero de valores impares é igual a " + valoresImpares.length)

//exercicio7
let menorValor = numbers[0];
for( let index=0; index< numbers.length; index++){
    if(menorValor > numbers[index]){
        menorValor = numbers[index]
}
}
console.log("o menor numero é " + menorValor)


//exercicio 8
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
for(let numero of numeros){
   console.log(numero) 
}

//exercicio9
let resultadoDivisao = [];
for(index=0; index < numeros.length; index +=1){
 console.log(numeros[index] / 2)
}
