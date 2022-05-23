
// Questo qui è il nostro array ed è identificato dalle parentesi quadre
const iscritti = ["Marco", "Paolo", "Matteo"];

// come leggere il mio array
iscritti[0] //Marco
iscritti[1] //Paolo
iscritti[2] //Matteo

// gli array come quasi tutto in informatica inizia a contare da 0

// possiamo aggiungere un nuovo elemento al nostro array
iscritti.push("Michele")

// lavorare con gli array su un ciclo
for(let i=0; i<iscritti.length; i++){
    console.log(iscritti[i])
}


// esempi live coding

//Posso (se voglio) creare un array vuoto per aggiungere gli elementi in un secondo momento
//Dentro un array possiamo aggiungere numeri, booleani etc...

const listaSpesa = [];
console.log(listaSpesa)

// inserire un array dentro un'altro array
// const spesaLista = ["carne", "pesce"["uova", "formaggi"]]

const spesaLista = ["carne", "pesce", "uova", "latte", "formaggi"]

console.log(spesaLista)

// per leggere un valore del nostro Array
// lo possiamo leggere con una const o senza 
const elemento1 = spesaLista[0];
const elemento3 = spesaLista[2];
console.log(elemento1, elemento3);
console.log(spesaLista.length);

// siccome la lenght è 5 ma l'ultimo risultato è 4 ci darà undefined
console.log(spesaLista[spesaLista.length]);

//Se voglio leggere il valore dell'ultimo valore del mio array
// usiamo lenght-1
console.log(spesaLista[spesaLista.length - 1]);

// legge il penultimo della lista
console.log(spesaLista[spesaLista.length - 2]);

//possiam anche aggiungere elementi
// o direttemente
listaSpesa.push("cipolle");

// oppure con una variabile
const piattoPreferito = "lasagna";
listaSpesa.push(piattoPreferito);

console.log(listaSpesa)

// se vogliamo aggiungere un elemento all'inizio o alla fine
const primoPiatto = "carbonara";
listaSpesa.push(primoPiatto)
listaSpesa.unshift(primoPiatto)

// cancellare un elemento dal nostro array

// cancella lultimo elemento della nostra lista
listaSpesa.pop();

// cancella il primo 
listaSpesa.shift();


// cancella il numero indicato
// il primo valore specifico indica il valore da cui partire, il secondo quanti elementi cancellare dal primo numero
listaSpesa.splice(2,1)

console.log(listaSpesa)

// trovo l'indice di un elemento e cancellalo
// se non trova l'elemento ci ritornerà -1
const indiceFarina = spesaLista.indexOf("farina")




