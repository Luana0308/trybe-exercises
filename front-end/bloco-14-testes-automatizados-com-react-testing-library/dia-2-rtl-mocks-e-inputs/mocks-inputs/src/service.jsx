const randomNumber = () => Math.floor(Math.random() * 101);
const divisivelPorDois = () => (randomNumber() % 2) === 0;

module.exports = { randomNumber, divisivelPorDois };
