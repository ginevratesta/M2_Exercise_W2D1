//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "Scrivi un algoritmo per trovare il più grande tra due numeri interi:\n"
);

let numberOne = 56;
let numberTwo = 24 + "\n";

if (numberTwo > numberOne) {
  console.log("24 è maggiore di 56\n");
} else {
  console.log("56 è maggiore di 24\n");
}

/*
ESERCIZIO 2
Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.
num < 5 - mostra in console "Tiny"
num < 10 - mostra in console "Small"
num < 15 - mostra in console "Medium"
num < 20 - mostra in console "Large"
num >= 20 - mostra in console "Huge"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione:\nnum < 5 - mostra in console 'Tiny'\nnum < 10 - mostra in console 'Small'\nnum < 15 - mostra in console 'Medium'\nnum < 20 - mostra in console 'Large'\nnum >= 20 - mostra in console 'Huge'\n"
);

let numberThree = 19;

if (numberThree < 5) {
  console.log("Tiny\n");
} else if (numberThree < 10) {
  console.log("Small\n");
} else if (numberThree < 15) {
  console.log("Medium\n");
} else if (numberThree < 20) {
  console.log("Large\n");
} else {
  console.log(numberThree >= 20 + "Huge\n");
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "Mostra i numeri da 0 a 10 (incluso) in ordine ascendente,\n ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di 'continue'):\n"
);

for (let loop = 0; loop <= 10; loop++) {
  if (loop === 3 || loop === 8) {
    continue;
  }
  console.log(loop);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "\nScrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento,\nil ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.\n"
);

for (let otherLoop = 0; otherLoop <= 15; otherLoop++) {
  if (otherLoop % 2 === 0) {
    console.log("Pari");
  } else {
    console.log("Dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "\nScrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se\nla loro addizione/sottrazione sia uguale a 8\n"
);

let x = 10;
let y = 2;

if (x === 8) {
  console.log("Il valore di x è 8\n");
} else if (y === 8) {
  console.log("Il valore di y è 8\n");
} else if (x - y === 8) {
  console.log("La sottrazione tra x e y ha come valore 8\n");
} else {
  console.log(
    "x e y sono diversi da 8 e sia la loro addizzione che la loro sottrazione non hanno come valore 8\n"
  );
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 32;
let shippingCost = 10;

if (totalShoppingCart >= 50) {
  console.log("Spedizione gratuita\n");
} else {
  console.log(
    "L'ammontare totale del tuo carrello è di euro: " +
      (totalShoppingCart + shippingCost) +
      "\nAncora 8 euro per usufruire della spedizione gratuita!\n"
  );
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.\nModifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente,\nse le spedizioni siano gratuite oppure no e e calcolando il totale."
);

let blackFridayToday = true; //Dichiariamo una variabile booleana che useremo come condizione per poter applicare lo sconto dato da uno specifico evento.

if (blackFridayToday) {
  totalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2; //Calcoliamo il valore della variabile applicando lo sconto del 20%
}
if (totalShoppingCart >= 50) {
  console.log("Spedizione gratuita\n");
} else {
  console.log(
    "\nL'ammontare totale del tuo carrello è di euro: " +
      totalShoppingCart +
      " Ancora 24.4 euro per usufruire della spedizione gratuita!"
  );
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/
/* SCRIVI QUI LA TUA RISPOSTA */

console.log(
  "\nUsa un operatore ternaio per assegnare ad una variabile chiamata 'gender' i valori 'male' o 'female'.\nLa scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.\nEs. se isMale e' vero, il valore di gender deve essere 'male'\n"
);

let isMale = false; //Dichiariamo una variabile booleana che useremo come condizione

let gender = isMale
  ? "Male"
  : "Female"; /*Dichiariamo una variabile e definiamone il valore.
Con la variabile booleana dichiarata prima, in questo caso con valore di "falso", affianchiamo la formula dell'operatore ternaio:
condizione + if true(?) "this" else(:) "that" ed infine stampiamo con console.log.
*/

console.log("\nGender " + gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
