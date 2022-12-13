/* const animals = ["ant", "bison", "camel", "duck", "elephant"]

const array = animals.slice(2, 4) // Prendo gli elementi da 2 (COMPRESO) a 4 (ESCLUSO)

console.log(animals) // l'array originale NON viene modificato!
console.log(array)
 */

// ***************************************** FOR-EACH ****************************************

const arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* for (let index = 0; index < arrayDiNumeri.length; index++) {
  const numeroCorrente = arrayDiNumeri[index]
  console.log(numeroCorrente)
} */

console.log("FOR EACH -----------------------------------")

/* const callback = function (numeroCorrente) {
  console.log(numeroCorrente)
}

const callback2 = numeroCorrente => {
  console.log(numeroCorrente)
} */

/* arrayDiNumeri.forEach(function (element) {
  console.log("Elemento corrente:", element)
})

arrayDiNumeri.forEach(element => {
  console.log("Elemento corrente:", element)
})

arrayDiNumeri.forEach((element, index) => {
  console.log("Elemento corrente:", element)
  console.log("Indice corrente:", index)
})

arrayDiNumeri.forEach((element, index, array) => {
  if (index < 5) {
    console.log(`a[${index}] = ${element}`)
    console.log("Array:", array)
  }
})
 */

console.log("MAP -----------------------------------")

/* const nuovoArray = arrayDiNumeri.map(element => {
  console.log("Elemento corrente:", element)
  return { numero: element * element }
})

console.log(nuovoArray) */

const prodotti = [
  { nome: "iPhone", prezzo: 20 },
  { nome: "Laptop ASUS", prezzo: 400 },
  { nome: "Laptop ASUS", prezzo: 400 },
  { nome: "Laptop ASUS", prezzo: 123 },
  { nome: "Laptop ASUS", prezzo: 545 },
  { nome: "Laptop ASUS", prezzo: 400 },
  { nome: "Laptop ASUS", prezzo: 89 },
  { nome: "Laptop ASUS", prezzo: 345 },
  { nome: "Laptop ASUS", prezzo: 15 },
  { nome: "Laptop ASUS", prezzo: 5 },
]

/* const prezzi = prodotti.map(prodotto => {
  console.log(prodotto)
  return prodotto.prezzo * 0.99
})

const prezzi = prodotti.map((prodotto, index, array) => {
  console.log(prodotto)
  return prodotto.prezzo * 0.99
})

const prezzi2 = prodotti.map(prodotto => prodotto.prezzo * 0.99)

console.log(prezzi)
console.log(prezzi2)

const cubiConArrow = arrayDiNumeri.map(elemento => elemento * elemento * elemento)

const cubiConFunzioneTradizionale = arrayDiNumeri.map(function (elemento) {
  return elemento * elemento * elemento
})

console.log(cubiConArrow)
 */

console.log("FILTER -----------------------------------")

/* const prodottiFiltrati = prodotti.filter(elemento => {
  return elemento.prezzo > 300 // IMPORTANTE: il return del filter deve tornare un valore BOOLEANO
})

const prodottiFiltrati = prodotti.filter((elemento, index, array) => {
  return elemento.prezzo > 300
})

const prodottiFiltrati2 = prodotti.filter(elemento => elemento.prezzo > 300)

console.log(prodottiFiltrati)
console.log(prodottiFiltrati2)
 */

console.log("REDUCE -----------------------------------")

/* const somma = arrayDiNumeri.reduce((accumulatore, elemento, index, array) => {
  console.log("Valore accumulatore: ", accumulatore)
  console.log("Valore elemento: ", elemento)
  return accumulatore + elemento
}, 0) // 0 è il valore iniziale dell'accumulatore

// I Iterazione accumulatore = 0, elemento = 1 --> nuovo accumulatore = 0 + 1
// II Iterazione accumulatore = 1, elemento = 2 --> nuovo accumulatore = 1 + 2
// III Iterazione accumulatore = 3, elemento = 3 --> nuovo accumulatore = 3 + 3
// ...
// X Iterazione accumulatore = 45, elemento = 10 --> accumulatore finale = 55

console.log(somma)

const prodotto = arrayDiNumeri.reduce((accumulatore, elemento, index, array) => {
  console.log("Valore accumulatore: ", accumulatore)
  console.log("Valore elemento: ", elemento)
  return accumulatore * elemento
}, 1)

console.log(prodotto)
 */

console.log("FIND -----------------------------------")

const prodotto = prodotti.find(elemento => elemento.prezzo === 5)

console.log(prodotto) // Mi torna un oggetto perché l'array di partenza è un array di oggetti

console.log("FINDINDEX -----------------------------------")

const indice = prodotti.findIndex(elemento => elemento.prezzo === 5)

console.log(indice) // Mi torna un numero perché sebbene l'array di partenza sia un array di oggetti, findIndex torna l'indice

const persone = [
  { nome: "Riccardo", cognome: "Gulin", età: 18, professione: "Dev" },
  { nome: "Stefano", cognome: "Gulin", età: 25, professione: "Operaio" },
]
/* persone.forEach(persona => {
      if(persona.età > 18) inviaEmail(persona.email)
  }) */

/* persone
    .filter(persona => persona.età >= 18)
    .forEach(personaMaggiorenne => inviaEmail(personaMaggiorenne.email))
  
  const [{ nome, cognome }, { età, professione }] = persone */
