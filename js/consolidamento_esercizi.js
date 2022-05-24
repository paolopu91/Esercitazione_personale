const emailInput = document.getElementById("emailInput")
const btnSubmit = document.getElementById("btnSubmit")
const alertResult = document.getElementById("alertResult")
const emailList = ["paolo@gmail.com","matteo@gmail.com", "federica@gmail.com", "francesca@gmail.com" ]

btnSubmit.addEventListener("click", function() {

 const userEmail = emailInput.value

//  vaibile per vedere se una mail è vero o falso che è nel nostro archivio fuori dal ciclo
// let foundEmailIndex ;
// questo ci servirà per ricreare ad ogni ciclo la nostra variabile come false
let isValid = false;

// controllo se l'email è valida
// L'email deve avere una @
//indexOf si usa con le stringhe e con gli array,
// ma non con array multidimensionale
if(userEmail.indexOf("@") === -1){
    alertResult.innerHTML = "Email non valida"
    alertResult.classList.add("alert-danger")
    alertResult.classList.remove("alert-success")

    return;
}



for(let i =0;i<emailList.length; i++){

    const currentEmail = emailList[i]

if(currentEmail === userEmail){
    foundEmailIndex = i
    isValid = true;
}

}


//Dopo il ciclo se l'utente è ammesso stampo un messaggio
//altrimenti ne stampo un'altro
//La variabile è stata messa fuori dal ciclo
// if(foundEmailIndex !== undefined){ 
//     console.log("")
// }

if(isValid){
    alertResult.innerHTML =" Complimenti sei ammesso!"
    alertResult.classList.remove("alert-danger")
    alertResult.classList.add("alert-success")

}else{
    alertResult.innerHTML= "Mi dispiace, non sei ammesso"
    alertResult.classList.add("alert-danger")
    alertResult.classList.remove("alert-success")
}

alertResult.classList.remove("d-none")
})