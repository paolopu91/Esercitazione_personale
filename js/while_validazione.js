//chiedere all'utente un numero tra 5 e 10.
//continuare a chiedere fino a quando non viene inserito un numero valido



let numero;

while(numero === undefined){
const numeroUtente = parseInt(prompt ("Inserisci un numero tra 5 e 10"));

if(isNaN(numeroUtente)){
}
if(numeroUtente>= 5 && numeroUtente<=10){
    numero = numeroUtente;
}
console.log(numero, typeof numero)
}

console.log("-------------------nuovo esempio-----------------------")

const prodottiAmmessi =[" banana","mela","carote","patate","pomodori"];
const lista = [];

//Chiedere all'utente di inserire dei prodotti nella lista spesa fino a quando
//questa non contiene 5 prodotti
// i prodotti devono essere tra i seguenti : banana mela carote patate pomodori

console.log(prodottiAmmessi.join(", "));

while(prodottiAmmessi.length <= 5){
    const prodottoInserito = prompt(
    "Inserisci un prodotto tra quelli disponibili : " +
        prodottiAmmessi.join ("-")
    )

    let prodottoValido = false;

    for (let i = 0; i<prodottiAmmessi.length; i++){
        if(prodottoInserito === prodottiAmmessi[i]){
            prodottoValido= true;
        }
    }

    if(prodottoValido){
        lista.push(prodottoInserito)
    }
    console.log(lista)
}


