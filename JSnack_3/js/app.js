console.log('Hola!')

// +++ PROBLEMA +++

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// +++ ANALISI e SVILUPPO +++

// CREO variabile somma
let somma = 0

//CHIEDI 10 numeri all'utente, crea un ciclo
for (let i = 0; i < 10; i++) {
    // CHIEDI i numeri all'utente
    let num = parseInt(prompt('inserire un numero'))
    console.log(num)
    // CALCOLA la somma dei umeri
    somma += num
}
//Stampa la somma di tutti i numeri in console
console.log('somma di tutti i numeri: ', somma)