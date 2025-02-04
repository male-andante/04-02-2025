// funzione che controlla SE tra 2 numeri interi, 1 dei 2 = 50 || n1 +n2 = 50 e return True se è vero.

let n1 = prompt('scrivi un numero')
let n2 = prompt('scrivi un altro numero')

const checkInt = function (n1, n2) {

if ((n1 == 50 || n2==50) || (n1+n2 == 50)){
    return true
    console.log('check con esito positivo')
} else {
    return false
    console.log('check con esito negativo')
}
}

// funzione che accetta una stringa e la posizione del carattere e rimuova il carattere dalla stringa. Ritorna la stringa modificata.
