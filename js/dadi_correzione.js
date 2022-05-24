const numeriUtente = [];
const numeriAi = [];


let sommaNumeriAi = 0;
let sommaNumeriUtente = 0;
for (let i = 1 ; i <= 6 ; i++){
    //Generiamo i numeri random per i nostri giocatori
    const randomNumberUser = Math.floor (Math.random() * 6) +1;
    const randomNumberAi = Math.floor (Math.random() * 6) +1;
    //pushamo nei rispettivi array precedentemente vuoti i nostri numeri
    numeriUtente.push(randomNumberUser)
    numeriAi.push(randomNumberAi)

    // sommiamo i numeri dei nostri giocatori
    sommaNumeriUtente += randomNumberUser
    sommaNumeriAi += randomNumberAi
}
console.log(numeriUtente, numeriAi)
console.log(sommaNumeriAi, sommaNumeriUtente)

if(sommaNumeriAi > sommaNumeriUtente){
    alert("l'ai dominerà il mondo!")
}else if (sommaNumeriAi < sommaNumeriUtente){
    alert("Questa volta te la sei cavata!")

}else{
    alert("Pareggio")
}