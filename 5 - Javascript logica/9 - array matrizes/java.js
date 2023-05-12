const arr = [
  ["1º Nivel", "2º Nivel", "3º Nivel"],
  ["1º Nivel", "2º Nivel", "3º Nivel"],
  ["1º Nivel", "2º Nivel", "3º Nivel"],
];
console.log(arr);
console.log(arr[0][1]);

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

matriz.push(["Nova Linha"]);
matriz[0].push("Nova Coluna");

console.table(matriz);
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}
// comentario
