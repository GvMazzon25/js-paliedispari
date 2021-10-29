//Pari & Dispari

/**
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

 */

const pariDispari = prompt('Pari o Dispari?')
console.log(pariDispari)

const randomUser = numberRandom(5, 1);
console.log(randomUser);

const randomPc = numberRandom(5, 1);
console.log(randomPc);

let somma = randomUser + randomPc;
console.log(somma)

let sommaValue = ('');

if (somma % 2 === 0){
    let sommaValue = ('pari');
    console.log(sommaValue);
}else{
    let sommaValue = ('dispari');
    console.log(sommaValue);
}

if( sommaValue.length = pariDispari.length){
    alert('Hai vinto');
}else{
    alert('Hai perso, vince il PC')
}

//Funzione generatore numeri random

function numberRandom (max, min){
    const random = Math.floor((Math.random() * max) + 1);
    return random;
}