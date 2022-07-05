function convert(valor:number, base:string, conversao: string) {
if(base === 'km' && conversao === 'm') {
    return valor * 1000
}
if(base === 'hm' && conversao === 'm') {
    return valor * 100
}
if(base === 'dam' && conversao === 'm') {
    return valor * 10
}
if(base === 'm' && conversao === 'm') {
    return valor * 1
}
if(base === 'dm' && conversao === 'm') {
    return valor * 0.1
}
if(base === 'cm' && conversao === 'm') {
    return valor * 0.01
}
if(base === 'mm' && conversao === 'm') {
    return valor * 0.001
}
}
console.log(convert(10,'km', 'm'))

export default convert;
