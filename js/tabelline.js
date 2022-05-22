

const btnCalcola = document.getElementById("btn-calcola-tabellina")
const inputMoltiplicatore = document.querySelector("[name='moltiplicatore']")

btnCalcola.addEventListener("click", function () {
    // controllo che il ciclo funzioni
    console.log("Pulsante calcola cliccato")

    // legge il campo inserito dall'utente nel nostro sito
    const moltiplicatore = parseInt(inputMoltiplicatore.value)

    // dovremmo controllare che il valore inserito sia un numero valido

    // generiamo la tabellina

    let resultListHtml= document.querySelector(".result-list")

    // Questo risultato serve per far scomparire i risultati precedenti all'interno del form
    
    // in pratica usiamo il nostro innerHTML senza niente tra le virgolette
    // per resettare ad ogni cambio di tabellina il campo, in modo da non sovrapporre o meglio
    // non aggiungere una lista infinita di numeri

    resultListHtml.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
       const risultato = moltiplicatore * i;

    //  stampiamo a schermo il risultato della nostra moltiplicazione

        const number = `${moltiplicatore} * ${i} = ${risultato}`

        console.log(number)

        // aggiungere += se vogliamo vedere tutta la tabellina scritta
        // se mettiamo solo = vedremo solo l'ultimo numero del ciclo perchè tutti gli altri risultati si sovrascrivono in un lasso di tempo brevissimo
        resultListHtml.innerHTML += `<li>${number}</li>`

    }
    })