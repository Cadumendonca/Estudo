//for inicialização, condição. finalização
// for (let indice = 0; indice <= 10; indice++) {
//   console.log("Indice: " + indice);
// }

let numero = prompt("Digite o numero que deseja multiplicar na tabuada:");
let tabuada = [];
for (let i = 1; i <= 20; i++) {
  // alert(numero + " x " + i + " = " + numero * i);
  tabuada += "\n" + numero + " x " + i + " = " + numero * i;
}
alert("O resultado da tabuada de " + numero + " foi:" + tabuada);
alert("Finalizado");
