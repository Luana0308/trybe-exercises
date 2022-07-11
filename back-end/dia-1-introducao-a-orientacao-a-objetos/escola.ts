// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class estudantes {
    matricula: string;
    nome: string;
    notaProva: number[];
    notaTrabalho: number[];

    constructor(m: string, n: string, nP: number[], nT: number[]){
        this.matricula = m;
        this.nome = n;
        this.notaProva = nP;
        this.notaTrabalho = nT;
    }

    soma(){
      const prova = this.notaProva.reduce((acc, atual) => {
        acc += atual
        return acc;
      },0)
      const trabalho = this.notaTrabalho.reduce((acc, atual) => {
         acc += atual
         return acc;
        },0);
        return prova + trabalho
    }
    media(){
        const somaNotas = this.soma();
        const dividi = this.notaProva.length + this.notaTrabalho.length;
    
        return Math.round(somaNotas / dividi);
    }

}