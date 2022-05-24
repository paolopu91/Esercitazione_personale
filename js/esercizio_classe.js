
// creiamo un array esterno per avere poi a schermo i nostri numeri 
let listaNumeri = [];

let sommaNumeri = 0;
// creiamo il nostro ciclo
for(let i = 1; i<= 10; i++){
    // scriviamo il nostro ciclo prompt che si ripeterà 10 volte
    const numeriDaChiedere = prompt ("Inseriscri un numero")
    
    // aggiungiamo lista numeri e mettiamo parseInt per far si che da string diventa number
    listaNumeri.push(parseInt(numeriDaChiedere));

    // scriviamo per avere la somma in questo modo con il parseInt sempre per far si Che otteniamo la somma di tutto
    sommaNumeri += parseInt(numeriDaChiedere)

    console.log(numeriDaChiedere);

    // creiamo le condizioni per verificare se è vero 

    // let isValid = false;

    // if(isNaN(numeriDaChiedere)){
    //     alert("inserisci un numero valido")
    // }else {
    //     sommaNumeri += 
    // }
}
console.log(sommaNumeri)