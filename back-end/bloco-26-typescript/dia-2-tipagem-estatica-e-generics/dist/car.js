"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colorsCar;
(function (colorsCar) {
    colorsCar["black"] = "black";
    colorsCar["white"] = "white";
    colorsCar["red"] = "red";
    colorsCar["gray"] = "gray";
})(colorsCar || (colorsCar = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "esquerda";
    Directions["RIGHT"] = "direita";
})(Directions || (Directions = {}));
class car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log(`o carro ${this.brand} acionou a buzina`);
    }
    openTheDoor() {
        console.log(`o carro abriu umas das ${this.doors}`);
    }
    closeTheDor() {
        console.log(`o carro fechou uma das ${this.doors}`);
    }
    turnOn() {
        console.log('ligou o carro');
    }
    turnOff() {
        console.log('desligou o carro');
    }
    turn(direction) {
        console.log(`o carro virou na ${direction}`);
    }
}
const car1 = new car('celta', colorsCar.black, 5);
car1.doors;
console.log(car1);
exports.default = car;
