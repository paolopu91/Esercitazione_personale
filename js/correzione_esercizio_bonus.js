const numeriRandom = []

// primo metodo 
for (let i = 0; i<10 ; i++){
    numeriRandom.push(Math.floor(Math.random() * 100))
}

// lo slice dobbiamo indicargli da dove partire e il secondo dove finire
// ma inizia a contare dalla fine, se non gli indichiamo un end, arriverà fino alla fine del nostro array
// lo splice invece dobbiamo indicargli dove partire e il secondo elemento deve essere il punto di partenza
const ultimiNumeri = numeriRandom.slice(numeriRandom.length -5)

console.log(numeriRandom, ultimiNumeri)


console.log("-----------------")
// secondo metodo
const ultimiNumeriRandom = []

// for (let i = o; i < 10 ; i++) {
//     numeriRandom.push(Math.floor(Math.random () * 100))

//     if(i > numeriRandom.length -5){
//         ultimiNumeriRandom.push(numeriRandom[i])
//     }
// }
// console.log (numeriRandom)
// console.log ( ultimiNumeriRandom)

console.log("---------------")

// quarto metodo

// creiamo un ciclo al contrario
//questo ci aiuterà a prendere i numeri al contrario

for(let i = 11; i > (11-5); i--){

    //Pusha i numeri alla fine dell'array
    ultimiNumeriRandom.unshift(numeriRandom[i]);

    //push dei numeri alla fine dell'array
    // ultimiNumeriRandom.push(numeriRandom[i]);
    numeriRandom[i];

    
}
    
    console.log(i)

    console.log("--------------------")


    // terzo metodo

    // for(let i= numeriRandom.length -5 ; i<numeriRandom.length; i++){
    //     ultimiNumeriRandom.unshift(numeriRandom[i]);
    // }

    // CONTROLLA ESERCIZIO DI FLORIAN PER VEDERE TUTTA LA CORREZIONE