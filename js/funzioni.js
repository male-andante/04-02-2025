// funzione che controlla SE tra 2 numeri interi, 1 dei 2 = 50 || n1 +n2 = 50 e return True se è vero.

/*let n1 = parseInt(prompt('scrivi un numero'))
let n2 = parseInt(prompt('scrivi un altro numero'))

const checkInt = function (n1, n2) {

if ((n1 === 50 || n2 === 50) || (n1+n2 === 50)){
    console.log('check con successo')
    return true
} else {
    console.log('check con insuccesso')
    return false
}
}

console.log(checkInt(n1, n2))*/

// funzione che accetta una stringa e la posizione del carattere e rimuova il carattere dalla stringa. Ritorna la stringa modificata.

let string = prompt('scrivi una parola')
let pos = parseInt(prompt('scegli un indice da rimuovere'))

const modifyString = function (string, pos) {
    
    if (pos <= string.length){
    let newString = string.slice(0, pos) + string.slice(pos +1)
    console.log(newString)
    return newString
} else {
    alert('indice più alto della lunghezza della stringa')
}

}

console.log(modifyString(string, pos))

