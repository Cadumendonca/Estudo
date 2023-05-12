let entrada1 = prompt("Digite o valor de x:");
let entrada2 = prompt("Digite o valor de y:");

let x = parseFloat(entrada1);
let y = parseFloat(entrada2);
let soma = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;

alert(
  "Resultados:" +
    "\nx + y = " +
    soma +
    "\nx - y = " +
    subtracao +
    "\nx * y = " +
    multiplicacao +
    "\nx / y = " +
    divisao
);
