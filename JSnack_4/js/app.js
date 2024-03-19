console.log('Hola!')

// +++ PROBLEMA +++

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// +++ ANALISI e SVILUPPO +++

// CREO l'array con la lista degli invitati
const vipname = ["marco", "davide", "eleonora", "giulio", "perla"]
console.log(vipname)

//CHIEDO all'utente il suo nome
const name = prompt('Inserire il nome')
console.log(name)

// SE il nome è uguale a quello nella lista
if (name == vipname) {
    // ALLORA può accedere all'evento
    console.log('Puoi partecipare alla festa!')
    // Altrimenti non può
} else {
    console.log('Siamo spiacenti ma non può partecipare alla festa')
}