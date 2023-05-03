// criando a array  
const frutas = ["maçã","caju","abacaxi","morango","manga","banana"];
  console.log(frutas.length)

// Acessando itens

frutas.forEach(function(item,indice,array){
  console.log(item,indice, array)
})

const primeiro = frutas[0]
console.log(primeiro)

const ultimo = frutas[frutas.length - 1];
console.log(ultimo)

//inserindo elementos

const adicionar = frutas.push("laranja");
console.log(frutas)


frutas.splice(1,0,"abacaxi");
console.log(frutas)

frutas.splice(3,4,"melancia");
console.log(frutas)

frutas.splice(5,6,"carambola");
console.log(frutas)