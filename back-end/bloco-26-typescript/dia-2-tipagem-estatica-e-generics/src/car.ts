enum colorsCar {
   black = 'black',
   white = 'white',
   red = 'red',
   gray = 'gray', 
}

enum Directions {
    LEFT = "esquerda",
    RIGHT = "direita",
}

class car {
    brand: string;
    color: colorsCar;
    doors: number;

    constructor(brand: string, color: colorsCar,doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): void {
        console.log(`o carro ${this.brand} acionou a buzina`)
    }
    openTheDoor(): void {
        console.log(`o carro abriu umas das ${this.doors}`)
    }
    closeTheDor(): void {
        console.log(`o carro fechou uma das ${this.doors}`)
    }
    turnOn(): void {
        console.log('ligou o carro')
    }
    turnOff(): void {
        console.log('desligou o carro')
    }
    turn(direction: Directions): void {
        console.log(`o carro virou na ${direction}`)
    }

}

const car1 = new car('gol', colorsCar.gray, 4)

car1.turnOn()
car1.openTheDoor()
car1.closeTheDor()
car1.turn(Directions.LEFT)
car1.turn(Directions.LEFT)
car1.turn(Directions.RIGHT)
car1.honk()
car1.openTheDoor()
car1.closeTheDor()
console.log(car1)
export default car;