/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */


const userWord = prompt("Inserisci una parola, ti dirò se è palindroma o no");
console.log(userWord);

// VERSIONE SCOMPOSTA SENZA SPLIT/REVERSE/JOIN MA CON 

let text = userWord
let i=0
while(i < text.length) {
    let char = text.charAt(i);    
    console.log(char);
    i++
}










/* //VERSIONE RAPIDA CON SPLIT/REVERSE/JOIN

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
    const joinArray = reverseArray.join("g");
    console.log(joinArray);
    // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    console.log(joinArray);

    //Step 4. Return the reversed string
    //return joinArray; // "olleh" 

    if (userWord === joinArray) {
        console.log("E' palindroma");
    } else {
        console.log("Non è palindroma");
    }
}

const result = wordTester(userWord); */