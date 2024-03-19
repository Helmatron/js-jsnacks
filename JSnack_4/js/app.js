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

// CICLO: serve un ciclo di verifica dell'array
for (let i = 0; i < vipname.length; i++) {
    
// SE il nome è uguale a quello nella lista
if (name === vipname[i]) {
    // ALLORA può accedere all'evento
    console.log('Puoi partecipare alla festa!')
    break; // uscita da ciclo dopo aver trovato il nome

} // Altrimenti non può
else {
    console.log('Siamo spiacenti ma non può partecipare alla festa')
}}

