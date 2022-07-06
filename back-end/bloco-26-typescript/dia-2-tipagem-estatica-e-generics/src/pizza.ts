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

const marguerita: pizza = {
    flavor: 'marguerita',
    slice: 6
}

console.log(marguerita)