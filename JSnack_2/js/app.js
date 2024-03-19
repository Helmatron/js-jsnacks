console.log('Hola!')

// +++ PROBLEMA +++

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.



// +++ ANALISI e SVILUPPO +++


// CHIEDI prima parola
const word1 = prompt('inserire prima parola')
console.log(word1)

// CHIEDI seconda parola
const word2 = prompt('inserire seconda parola')
console.log(word2)

// SE la prima parola ha più lettere della seconda, stampala in console
if (word1 > word2) {
    console.log(word1)
} else {
    console.log(word2)
}