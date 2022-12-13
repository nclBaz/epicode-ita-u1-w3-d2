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

const prezzi = prodotti.map(prodotto => {
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
