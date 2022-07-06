import { type } from "os";

interface pizza {
    flavor: string,
    slice: slices
}

type slices = 4 | 6 |8

const calabresa: pizza = {
    flavor: 'calabresa',
    slice: 8,
}
console.log(calabresa);

// const marguerita: pizza = {
//     flavor: 'marguerita',
//     slice: 6
// }

// console.log(marguerita)


type comum =  'calabresa' | 'frango' | 'pepperoni'
type veg = 'marguerita' | 'palmito' | 'cogumelo'
type doce = 'nutela' | 'goiabada com queijo' | 'marshmallow'


interface pizzaComum extends pizza {
    flavor: comum
}

interface pizzaVeg extends pizza {
    flavor: veg
}

interface pizzaDoce extends pizza {
    flavor: doce
}

const marguerita: pizzaVeg = {
    flavor: 'marguerita',
    slice: 6
}

console.log(marguerita)