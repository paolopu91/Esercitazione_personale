// partendo dalla lista della spesa voglio stampare un elemtno alla volta

const listaSpesa = ["carne", "uova", "latte", "farina", "formaggi"]

// per stampare gli elementi uno alla SecurityPolicyViolationEvent, devo usare un ciclo
for( let i=0; i<listaSpesa.length; i++){

//  indipendentemente dall'array o meno, la varibible i sarà sempre un 
//  numero che si incrementa ad ogni iterazione del ciclo

// So che la variabile i parte da 0 si incrementa
// so anche che gli indici di un array partano da 0 e crescono

// in questo modo leggeremo la lista della spesa partendo da 0 e salendo a seconda del contenuto del nostro array

    console.log("Elemento all'indice"  + i +  "sarà uguale" + listaSpesa[i]);

}

console.log("____________________________")


// Questa varibile la dichiaro sempre fuori dal ciclo perchè sennò ad ogni ciclo perderò il valore e lo dovrò ritrovare
let indiceTrovato = -1

// cerchiamo all'interno di un array un elemento con il valore farina e recuperiamo il suo indice
// Esempio con elemento trovato
for(let i = 0; i<listaSpesa.length; i++){

    if(listaSpesa[i] === "farina"){
        indiceTrovato = i;
        console.log("L'elemento " + listaSpesa[i] + " è all'indice" + i );
    }
}

// adesso che il ciclo è finito voglio stampare l'indice trovato nel mio array
if(indiceTrovato<0){
    console.log("l'elemento non è presente nel mio array")
}else{
    console.log("l'elemento cercato si trova all'indice " + indiceTrovato)  
}

console.log("-----------------------")

// esempio con elemento non trovato,perchè coca-cola non è presente nel mio array
for(let i = 0; i<listaSpesa.length; i++){

    if(listaSpesa[i] === "coca-cola"){
        indiceTrovato = i;
        console.log("L'elemento " + listaSpesa[i] + " è all'indice" + i );
    }
}

// adesso che il ciclo è finito voglio stampare l'indice trovato nel mio array
if(indiceTrovato<0){
    console.log("l'elemento non è presente nel mio array")
}else{
    console.log("l'elemento cercato si trova all'indice " + indiceTrovato)  
}

console.log("----------------------------------")

// dato un array di numeri, voglio creare un secondo array che abbia solo numeri pari
const numeriGenerici = [2,60,33,55,70,99];

//array vuoto dove inserire i numeri pari

const numeriPari =[]
const numeriDispari =[];

//ciclo for per scorrere l'array principale
for(let i =0; i<numeriGenerici.length; i++){
    // ad ogni iterazione questa variabile avrà un valore diverso
   const numeroCorrente = numeriGenerici[i]

   // controllo numero corrente è pari
//    se il due ci sta perfettamente e non avanza alcuna cifra è un multiplo di 2
   if(numeroCorrente % 2 === 0 ){
    numeriPari.push(numeroCorrente)
   }else{
       numeriDispari.push(numeroCorrente)
   }

}
console.log(numeriGenerici)
console.log(numeriPari)
console.log(numeriDispari)