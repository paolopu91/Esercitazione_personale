//Esempio di come è possibile usare un ciclo do while

let userLoggedIn = false;
let listaSpesa =["carne", "pane", "latte", "hot dog", "cipolla","speck"]

let i = 0,

// fin quando l'utente è loggato e (i) è minone della lunghezza della lista spesa
// Lui non ci stamperà nulla perchè c'è la variabile let = false

//viene controllata prima la condizione, solo se vera esegue il codice
while (userLoggedIn && i < listaSpesa.length){
    console.log(listaSpesa[i])
    
    
    i++
}
console.log("while i" + i)
// se volessimo farlo con il do-while

let j = 0

// Viene eseguito il codice per la prima volta comunque, dopo controlla la condizione, se è vera ripete il codice.
do{

    console.log (listaSpesa[j])
    j++;
} while (userLoggedIn && j < listaSpesa.length);

console.log("while j" + j)