let a = 5;
let b = a;
console.log(b);

let array = [1, 4, 2, 6];
console.log(array[1]);
const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

// adicionar elementos no final do array push
arr.push("Boromir");
console.log(arr);

// adicionar elementos no começo do array unshift
arr.unshift("O anel");
console.log(arr);

//remover Elemento no final do array pop e pega ele
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//remover Elemento no começo do array shift
ultimoElemento = arr.shift();
console.log(ultimoElemento);

// Pesquisar por um elemento includes ele retorna valor true e false
const inclue = arr.includes("Gandalf");
console.log(inclue);

//Pesquisar por um elemento no indice indexOF
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar e concaternar slice
const hobbits = arr.slice(0, 4);
console.log(arr);
console.log(hobbits);

const outros = arr.slice(-4);
console.log(outros);

//concaternar concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos elementos splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);

// Iterar sobre os elementos do array
for (let inde = 0; inde < sociedade.length; inde++) {
  const elemento = sociedade[inde];
  console.log(elemento + " se encontra na posição " + inde);
}
