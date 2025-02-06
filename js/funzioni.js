// 1 - funzione che controlla SE tra 2 numeri interi, 1 dei 2 = 50 || n1 +n2 = 50 e return True se è vero.

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

// 2 - funzione che accetta una stringa e la posizione del carattere e rimuova il carattere dalla stringa. Ritorna la stringa modificata.

/*let string = prompt('scrivi una parola')
let pos = parseInt(prompt('scegli un indice da rimuovere'))

const modifyString = function (string, pos) {
    
    if (pos <= string.length){
    //let newString = string.slice(0, pos) + string.slice(pos +1) alternativa 1 più macchinosa
    let newString = string.split(pos).join('')  //alternativa 2 più immediata
    console.log(newString)
    return newString
} else {
    alert('indice più alto della lunghezza della stringa')
}

}

console.log(modifyString(string, pos))*/

// 3 - funzione che che controlla 2 numeri: 40<= n1&n2 <= 60 || 70<= n1&n2 <= 100.

/*let n1 = parseInt(prompt('scegli un numero'))
let n2 = parseInt(prompt('scegli un altro numero'))

const contained = function (n1,n2) {
    if ((n1 >= 40 && n2<= 60)||(n1 >= 70 && n2 <= 100)){
        return true
    } else {
        return false
    }
}

alert(contained(n1,n2))*/

// 4 - funzione che accetta il nome di una città come parametro. se inizia per New || Los ritorna True

let city = prompt('inserisci nome città americana')

/*const checkCityPrex = function (city) {

    let newPrex = city.toLowerCase().startsWith("new", 0)
    let losPrex = city.toLowerCase().startsWith("los", 0)

    if (newPrex == true || losPrex == true) {
        
        return true

    } else {
        return false
    }
}

console.log(checkCityPrex(city))*/

/*const checkCityPrex = (city) => {

    let newPrex = city.toLowerCase().startsWith("new", 0)
    let losPrex = city.toLowerCase().startsWith("los", 0)

    if (newPrex == true || losPrex == true) {
        
        return true

    } else {
        return false
    }
}

console.log(checkCityPrex(city))*/

// 5 - funzione che accetta un array come parametro e ne ritorna la somma

let arr = [Math.random(), Math.random(), Math.random(), Math.random()]

const sumArray = (total, num) =>{
    return total + Math.round(num);
}

let sum = arr.reduce(sumArray, 0);
console.log (arr)
console.log(sum)

//oppure si poteva usare for partendo da zero e sommando + 1 fino alla lunghezza dell'array

// 6 - 

