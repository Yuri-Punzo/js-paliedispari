/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */



// SECONDA VERSIONE - SCOMPOSTA SENZA SPLIT/REVERSE/JOIN MA CON CICLO E CHARAT

const userWord = prompt("Inserisci una parola, ti dirò se è palindroma o no");
console.log(userWord);

let reversedWord = "" //gli assegno il valore "" per poter partire da una stringa vuota quando ci sommerò char nel ciclo while

// con questa funzione di fatto leggo la parola al contrario lettera per lettera e la ricompongo, poi la paragono a quella immessa dall'utente
palindromeVerifier(userWord);
function palindromeVerifier(text) {
    let i = text.length; // serve a far partire dall'ultima lettera della parola
    while (i > 0) {
        let char = text.charAt(i - 1); // si mette i-1 perché i parte a contare da 0, length invece parte da 1 !
        console.log(char);
        reversedWord += char // questo di fatto rimonta la parola al contrario sommando le lettere pescate dal testo
        i--
    }
    console.log(reversedWord);

    if (reversedWord === text) {
        console.log("è palindroma");
    } else {
        console.log("non è palindroma");
    }
}


// TERZA VERSIONE ipersemplificata con solo funzione, cicli e if/else

//creo var esterna parola e var esterna parola_reversed
//poi creo due cicli for uno incrementale e uno decrementale
//controllo se la prima var è uguale alla seconda var
//fine

/* const inputWord = prompt("dimmi una parola")

palindromeTester(inputWord)
function palindromeTester(userWord) {


    let userWordLetters
    for (let i = 0; i < userWord.length; i++) {
        userWordLetters = userWord.charAt(i)
        console.log(userWordLetters);
    }

    let reversedWordLetters
    for (let i = userWord.length; i > 0; i--) {
        reversedWordLetters = userWord.charAt(i - 1)
        console.log(reversedWordLetters);
    }

    if (userWordLetters === reversedWordLetters) {
        console.log("è palindroma");
    } else {
        console.log("non è palindroma");
    }
} */


/* //PRIMA VERSIONE - CON SPLIT/REVERSE/JOIN

const userWord = prompt("Inserisci una parola, ti dirò se è palindroma o no");
console.log(userWord);

function wordTester(word) {
    // Step 1. Use the split() method to return a new array
    const splitString = word.split("");// const splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]


    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse();
    // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join("");
    console.log(joinArray);
    // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    //return joinArray; // "olleh" 

    if (userWord === joinArray) {
        console.log("E' palindroma");
    } else {
        console.log("Non è palindroma");
    }
}

wordTester(userWord); */