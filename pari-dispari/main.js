/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */


const  userEvenOrOdd = prompt("Scegli: PARI o DISPARI");
console.log(userEvenOrOdd);
const userNumber = Number(prompt("Scegli un numero fra 1 e 5"));
console.log(userNumber);


function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const computerNumber = rndNumber(1,5);
console.log(computerNumber);

const sum = userNumber + computerNumber;
console.log(sum);


let sumEvenOrOdd
if(sum % 2 === 0) {
  sumEvenOrOdd = true
} else {
  sumEvenOrOdd = false
}


function evenOrOdd() {
  if (userEvenOrOdd === "pari" && sumEvenOrOdd === true) {
    console.log("vince user");
  } else if (userEvenOrOdd === "dispari" && sumEvenOrOdd === false){
    console.log("vince user");
  } else {
    console.log("vince pc");
  }
}

evenOrOdd(userEvenOrOdd);



/* //soluzione alternativa forse leggeremente più precisa per la consegna
function x(num1, num2) {
  const sum = num1 + num2;
  if (sum % 2 === 0) {
    return "pari"
  } else {
    return "dispari"
  }
}

if (x(userNumber,computerNumber) === userEvenOrOdd) {
  console.log("ha vinto user");
} else {
  console.log("ha vinto il pc");
} */