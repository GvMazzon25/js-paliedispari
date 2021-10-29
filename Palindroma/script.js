//Parola Palindroma

/**
 * Chiedere all’utente di inserire una parola
   Creare una funzione per capire se la parola inserita è palindroma
 */

//Variabile

let userWord = prompt('Scrivi una parola');
console.log(userWord);



const wordReverse = wordPali (userWord);
console.log (wordReverse);

if(wordReverse === userWord){
    alert(`La parola ${userWord} è palindroma`);
}else{
    alert (`La parola ${userWord} non è palindroma`);
}


//Funzioni

function wordPali (userWord){
    let reverse = '';
    for(let i = userWord.length -1; i >= 0; i--){
        console.log(userWord[i]);
        reverse += userWord[i];
    }

    return reverse; 
}
