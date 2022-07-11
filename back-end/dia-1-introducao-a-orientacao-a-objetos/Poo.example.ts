// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

class TV {
    private brand: String;
    private size: Number;
    private resolution: number;
    private connections: string;
    private connectedTo:string;

    constructor(b:string, s:number, r:number, c: string, ct: string){
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
        this.connectedTo = ct
    }
    thurOn():void{
        console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}`)
    }
    get connectedTo1(): string | undefined {
        return this.connectedTo as string;
      }
    
      set connectedTo2(value: string) {
        if (this.connections.includes(value)) {
          this.connectedTo = value;
          console.log(this.connectedTo);
        } else {
          console.log('Sorry, connection unavailable!');
        }
      }
    
}
const TvSansung = new TV('sansung', 60, 30, 'HDMI', 'true')
TvSansung.thurOn();

console.log(TvSansung)

