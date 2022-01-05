// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const letraA = names.reduce((acc,name) => {
        name.split('').forEach(letter => {
            if(letter === 'a' || letter == 'A'){
                acc = acc + 1
            }
        });
        return acc
    },0)
    return letraA
  }
  console.log(containsA());