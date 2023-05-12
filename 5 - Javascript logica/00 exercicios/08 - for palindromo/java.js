//for inicialização, condição. finalização
// for (let indice = 0; indice <= 10; indice++) {
//   console.log("Indice: " + indice);
// }

let palavra = prompt("Qual palavra você deseja saber ser é um palindromo?");
let trocaPalavra = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  trocaPalavra += palavra[i];
}

if (palavra === trocaPalavra) {
  alert(palavra + " é um palindromo\n\n" + palavra + " == " + trocaPalavra);
} else {
  alert(
    palavra + " não é um palindromo\n\n" + palavra + " !== " + trocaPalavra
  );
}
