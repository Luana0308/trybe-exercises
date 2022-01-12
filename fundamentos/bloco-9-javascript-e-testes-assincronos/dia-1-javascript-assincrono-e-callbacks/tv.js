const constroleRemoto = (tecla, callbakcTv) => {
 if(tecla === 'ligar'){
     callbakcTv('ligar')
 }
}

let volume = 0 
const televisao = (comando) => {
 if( comando === 'ligar') {
     console.log('ligar televisão')
 }
 if( comando === 'volumeAumentar') {
    volume += 1  
    console.log(`volume é ${volume}`)
 }
 if( comando === 'volumeAbaixar') {
    volume -= 1  
    console.log(`volume é ${volume}`)
 }
}

constroleRemoto('ligar', televisao)