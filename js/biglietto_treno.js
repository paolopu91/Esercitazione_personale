// allert che avverte l'utente che sta per dover compiere delle azioni
alert("Le chiediamo gentilemnte di compilare i campi qui sotto, per poter vedere il prezzo del suo biglietto")

const nomeDaChiedere = prompt ("Quale è il suo Nome e Cognome?");
const km = prompt ("Quanti km deve fare?");
const età = prompt("Quale è la sua età?");
console.log(nomeDaChiedere, km, età);

// costante che mi indica il prezzo al km del mio biglietto
const prezzo = 0.10
const prezzo20 = 0.2
const prezzo40 = 0.4
// variabile che mi indica il costo totale del mio biglietto con una semplice operazione matematica di moltiplicazione
let costoTotale = prezzo * km
console.log(costoTotale)

if(età >= 65){
    costoTotale = prezzo * km - prezzo40
}else if( età < 18){
    costoTotale = prezzo * km - prezzo20
}


// questo è il modo per dichiarare e per vedere in html gli elementi richiesti nel prompt 
const nome = document.querySelector('.nome');
nome.innerHTML += nomeDaChiedere 

// questo è il modo per far comparire sull'html gli elementi richiesti nel prompt
const kmDaFare = document.querySelector('.km')
kmDaFare.innerHTML += km

// questo è il modo in cui usare innerHTML per vedere gli elementi richiesti nel prompt
const age = document.querySelector('.eta')
age.innerHTML += età

// In questo modo posso vedere sulla mia pagina html la soluzione alla formula scritta precedentemente per il costo totale del mio biglietto
const biglietto = document.getElementById('prezzoBiglietto')
biglietto.innerHTML += costoTotale
