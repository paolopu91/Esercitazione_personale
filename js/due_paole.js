// chiedere all'utente due parole
// userò due prompt
//le risposte le salvo in due variabili
//cerco la lunghezza del testo delle due variabili
//se la prima parola è più lunga stampo un messaggio
// ALTRIMENTI se la seconda parola è più lunga stampo un'altro messaggio
//ALTRIMENTI scrivo che le parole sono uguali

const parola1 = prompt ("inserisci la prima parola")
const parola2 = prompt ("Inserisci la seconda parola")

console.log(parola1.length),(parola2.length)

if (parola1.length > parola2.length){
console.log(
    `La prima parola - ${parola1} - è più lunga della seconda - ${parola2} -`
    );
} else if { parola1.length < parola2.length
console.log(
    `La seconda parola - ${parola2} - è più lunga della prima parola - ${parola1} -`
    );
} else{
    console.log(
        `le due parole - ${parola1}, ${parola2} - hanno la stessa lunghezza`
    );
}
