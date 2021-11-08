//exericicio 1
const a = 100;
const b = 20;

let adicao = (a + b);
console.log(adicao);

let subtracao = (a - b);
console.log(subtracao);

let multiplicacao = (a * b);
console.log(multiplicacao)

let divisao = (a / b);
console.log(divisao);

let modulo = (a % b)
console.log(modulo);

//exercicio2
let c = 200;
let d = 100;
if (c > d){
console.log("c é maior do que d")
} 
else {
console.log("d é maior do que c")
}

//exercicio3
let num1 = 10
let num2 = 50
let num3 = 30
if (num1 > num2 && num1 > num3){
    console.log('numero 1 é o maior dos 3')
}
else if (num2 > num1 && num2 > num3){
    console.log('numero 2 é o maior dos 3')
}
else if (num3 > num1 && num3 > num2){
    console.log('numero 3 é o maior dos 3')
}

//exercicio4
const notaPassouProjeto = 200
if (notaPassouProjeto >= 80 && notaPassouProjeto <= 100){
    console.log('positive')
}
else if (notaPassouProjeto < 80){
    console.log('negative')
}
else{
    console.log('zero')
}
//correcaodoexercicio4
const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

//exercicio5
const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 90;
if (angulo1 + angulo2 + angulo3 === 180){
    console.log('true')
}
else{
    console.log ('false')
}

//exericicio6
const peca = 'rainha';
if (peca == 'bispo'){
    console.log('Direita' .toLowerCase("direita"))
}
else if (peca == 'rainha'){
    console.log('esquerda')
}
else if (peca == 'cavalo'){
    console.log('diagonal')
}
else {
    console.log('erro')
}
//correcaoexericicio6
const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//exercicio7
let notaPorcentagem = 90
if (notaPorcentagem >= 90 && notaPorcentagem <=100){
    console.log('A')
}
else if (notaPorcentagem >= 80 && notaPorcentagem <90){
    console.log('B')
}
else if (notaPorcentagem >= 70 && notaPorcentagem < 80){
    console.log('C')
}
else if (notaPorcentagem >= 60 && notaPorcentagem < 70){
    console.log('D')
}
else if (notaPorcentagem >= 50 && notaPorcentagem < 60){
    console.log('E')
}
else if (notaPorcentagem >= 0 && notaPorcentagem <50){
    console.log('F')
}
else{
    console.log("erro")
}

// //exercicio8
// const numero1 = 15
// const numero2 = 15
// const numero3 = 45
// if (numero1 || numero2 || numero3 === ((2 % 2) ===0)){
//     console.log('true')
// }
// else {
//     console.log('false')
// }

// correcao do exericicio8
const f = 2;
const g = 3;
const h = 5;

let isEven = false;

if ((f % 2 === 0 || g % 2 === 0 || h % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//exercicio9
const valor1 = 10
const valor2 = 12
const valor3 = 14
let resultado = false
if ((valor1 % 2 != 0 || valor2 % 2 != 0 || valor3 % 2 != 0)) {
    isEven = true;
};
  console.log(resultado);


//exercicio10
const custoProduto = 100
const valorVendaProduto = 200
let valorCustoTotal = custoProduto + ((custoProduto *20) /100)
//let valorTotalCustopor1000 = valorCustoTotal * 1000
//let valorVendaTotal = valorVendaProduto *1000
let valorLucro = (valorVendaProduto - valorCustoTotal) * 1000
console.log(valorLucro)

//exercicio11

let salarioBruto = 3000
let INSS; 
let impostoRenda;
if(salarioBruto <= 1556.94){
INSS = salarioBruto *0.08
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
INSS = salarioBruto * 0.09
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
INSS = salarioBruto * 0.11
}
else if (salarioBruto >= 5189.82){
INSS = 570.88
}

let salarioINSS = salarioBruto - INSS
if(salarioINSS <= 1903.98){
impostoRenda = 0
}
else if(salarioINSS>= 1903.99 && salarioINSS<= 2826.65){
impostoRenda = (salarioINSS * 0.075) - 142.80
}
else if(salarioINSS>= 2826.66 && salarioINSS<= 3751.05){
impostoRenda = (salarioINSS * 0.15) - 354.80
}
else if(salarioINSS>= 3751.06 && salarioINSS<= 4664.68){
impostoRenda = (salarioINSS * 0.225) - 636.13 
}
else if (salarioINSS >= 4664.68){
impostoRenda = (salarioINSS * 0.275) - 869.36
}
console.log("salario: " + (salarioINSS - impostoRenda))
