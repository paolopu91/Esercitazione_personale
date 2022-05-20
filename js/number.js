alert("Questa parte è sui number di javascript")

const number = 3.445151
    numeroFinale = number.toFixed(2)
    
    console.log(number)

    console.log("--------------------")

const numero = '33' + 3
console.log(numero)
// questo non fa 36 perchè il testo viene letto come una stringa dal browser in quanto ci sono le virgolette
// e quindi verra letto tutto in linea ovvero 333

console.log("-------------------------")

// per convertire invece una stringa in numero faremo in questo modo:
const num = '43'
console.log (Number(num)+ 3);

console.log("--------------------------------------")

// operatori matematici + - / % * ( addizione , sottrazione, divisione, resto , moltiplicazione)

const addizione = 43 + 3;
const sottrazione = 43-3;
const divisione = 43 / 3;
const moltiplicazione = 43 * 3
const resto = 43 % 3;
console.log(addizione, sottrazione, divisione, moltiplicazione, resto)

console.log("-------------------")
// operatori di incremento e decremento
let incremento = 43;
incremento++;

let decremento = 43;
decremento--;

console.log(incremento, decremento)

console.log("____________________________")

// Operatori di assegnazione
// sono += -= /= *=
// grazie a questi operatori posso fare operazioni più velocemente

let piùUguale = 40
piùUguale+= 8;
console.log(piùUguale)

let menoUguale = 40
menoUguale-=8
console.log(menoUguale)

let divisoUguale = 40
divisoUguale /= 8
console.log(divisoUguale)

let moltiplicoUguale= 40
moltiplicoUguale*=8
console.log(moltiplicoUguale)

console.log("---------------")
// Opertori di comparazione
let minore =10
console.log(minore < 10)
console.log(minore<=10)
