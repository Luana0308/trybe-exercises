// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class TV {
    brand: String;
    size: Number;
    resolution: number;
    connections: string[];
    connectedTo:string;

    constructor(b:string, s:number, r:number, c: string[]){
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }
    thurOn():void{
        console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}`)
    }
    
}
const TvSansung = new TV('sansung', 60, 30, ['HDMI'])
TvSansung.thurOn();

