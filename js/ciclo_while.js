/* Ciclo While spiegazione*/
//Voglio ripetere un ciclo 10 volte

// Come lo faccio con il ciclo for?
for (let i = 0; i<10; i++){
    console.log(i);
}

//Come lo faccio con un ciclo while?

// nel ciclo while la variabile va dichiarata fuori
let i = 0

// nel ciclo while possiamo scrivere solo la condizione ma possiamo anche scrivere più condizioni insieme
while(i<10){
    console.log(i);


    // alla fine del ciclo devo incrementare in modo manuale il contatore da me usato
    i++;
}

//---------------------------------
//---------------------------------
//---------------------------------

// Esempio un pò più Reale

const listaSpesa=["carne", "pane", "latte", "hot dog", "cipolla","speck"];

// se volessimo stampare i nostri elementi con il ciclo while e il ciclo for

// con il ciclo for
for (let i=0 ; i<listaSpesa.length;i++){
    console.log(listaSpesa[i]);
}


// con il ciclo while
let j = 0

while(j<listaSpesa.length) {

    console.log (listaSpesa[j])

    j++
}


console.log("cerchiamo nella lista della spesa un elemento")

// usando il ciclo for

// variabile per salvare l'indice del nostro ingrediente
let indiceSpeck;

for (let i = 0 ; i<listaSpesa.length; i++){
    if (listaSpesa[i] === "speck"){

        indiceSpeck = i;

    }
}
console.log(indiceSpeck)

// usando il ciclo while
let indiceSpeckWhile;
let y = 0;
// finchè la variabile non è definita e rimane undefined
//e
//finchè la variabile y è minore della lunghezza della lista
// il ciclo in questo modo si bloccherà non appena una delle due variabili non è più vera
while(indiceSpeckWhile === undefined && y<listaSpesa.length){

    if(listaSpesa[y] === "speck"){

        indiceSpeck = y;
    }

// se indiceSpeckWhile non c'è succede che il ciclo va avanti all'infinito


    y++;
}

console.log("------------nuove esempio--------")

// ciclo while con k come variabile

let k= 0;

while(listaSpesa[k] !== "speck" && k < listaSpesa.length){
    console.log("while 2 -" + k)

    k++;
}
console.log ("while2 - indiceSpeck = " + k)
