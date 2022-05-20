

const btnCalcola = document.getElementById("btn-calcola-tabellina")
const inputMoltiplicatore = document.querySelector("[name='moltiplicatore']")

console.dir(btnCalcola)
console.dir(inputMoltiplicatore)

btnCalcola.addEventListener("click", function () {
    // controllo che il ciclo funzioni
    console.log("Pulsante calcola cliccato")

    // legge il campo inserito dall'utente nel nostro sito
    const moltiplicatore = parseInt(inputMoltiplicatore.value)

    // dovremmo controllare che il valore inserito sia un numero valido

    // generiamo la tabellina

    const resultListHtml= document.querySelector(".result-list")

    // Questo risultato serve per far scomparire i risultati precedenti all'interno del form
    resultListHtml.innerHTML = "";

    for (let i = 0; i <= 10; i++) {
       const risultato = moltiplicatore * i;

    //  stampiamo a schermo il risultato della nostra moltiplicazione

        const testo = `${moltiplicatore} * ${i} = ${risultato}`

        console.log(testo)

        // aggiungere += se vogliamo vedere tutta la tabellina scritta
        // se mettiamo solo = vedremo solo l'ultimo numero del ciclo perchè tutti gli altri risultati si sovrascrivono
        resultListHtml.innerHTML += `<li>${testo}</li>`

    }
    })