// ************************ PARAMETRI DI DEFAULT ****************************

/* ESEMPIO PRE-ES6

const saluta = nome => {
  if (!nome) nome = "Riccardo" // DEFAULT
  console.log(`Ciao il mio nome è ${nome}`)
} */

/* ES6

const saluta = (nome = "Riccardo", cognome = "Gulin") => {
  console.log(`Ciao il mio nome è ${nome}`)
  console.log(`Ciao il mio cognome è ${cognome}`)
}

saluta("Palma", "Cognome")
saluta()
 */

// ******************************* SHORTHAND SYNTAX ***************************
/*
const func = (nome, età) => {
  return {
    nome: nome,
    età: età,
  }
}

const func2 = (nome, età) => {
  /*   if (typeof età === "number") {
    return {
      nome,
      età,
    }
  } else {
    return {
      nome,
      età: 0,
    }
  } 
  return {
    nome,
    età: typeof età === "number" ? età : 0,
  }
}
*/

/* console.log(func("Riccardo", 18))
console.log(func2("Riccardo", 18)) */

// ****************************** OBJECT DESTRUCTURING **************************

/* const persona = { nome: "Riccardo", cognome: "Gulin", età: 18, professione: "Dev" } */

/* const nome = persona.nome
const cognome = persona.cognome
const età = persona.età
const professione = persona.professione */

/* const { nome, cognome, età, professione, email="miaemail@gmail.com" } = persona

console.log(nome)
console.log(cognome) */

// ******************************* ARRAY DESTRUCTURING ******************************

/* const persone = [
  { nome: "Riccardo", cognome: "Gulin", età: 18, professione: "Dev" },
  { nome: "Stefano", cognome: "Gulin", età: 25, professione: "Operaio" },
]

console.log(nome)
console.log(cognome)
console.log(età)
console.log(professione)

const coord = [12313221, 9042321]

/* const latitudine = coord[0]
const longitudine = coord[1] */
/*
const [latitudine, longitudine, terzaCoord = 1] = coord // terzaCoord avrà valore 1 perché l'array coord ha solo 2 elementi!
 */
// *********************************** SPREAD OPERATOR *************************************

/* const obj1 = { nome: "Riccardo", cognome: "Gulin", età: 18, professione: "Dev" }
const obj2 = { ...obj1 } // i tre puntini copiano tutte le proprietà dell'obj1 nell'obj2

console.log(obj2)

obj2.nome = "Giorgio"

console.log(obj1)
console.log(obj2)

const obj3 = { ...obj1, ...obj2 } // la copia avviene secondo un ordine ben preciso --> da sx a dx (chi viene dopo sovrascrive quello di prima)

console.log(obj3)

const obj4 = { età: 30, numeroTel: 12312321, email: "oioajdjsa" }

const obj5 = { ...obj1, ...obj4, haLaPatente: true }

console.log(obj5) */

// **************************************** SPREAD OPERATOR SU ARRAY **********************************

/* const stringa = "Ciao a tutti"
const array = [...stringa] // ['C', 'i', 'a', 'o', ' ', 'a', ' ', 't','u', 't', 't', 'i']

console.log(array) */

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)
