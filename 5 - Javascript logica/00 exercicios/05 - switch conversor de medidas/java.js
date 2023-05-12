const valor = prompt("Digite o valor em metros que você deseja converter:");
const valorNumero = parseFloat(valor);
const medida = prompt(
  "Qual medida deve ser utilizada? \nmm \ncm \ndm \ndam \nhm \nkm"
);
switch (medida) {
  case "mm":
    alert("O Resultado é " + valorNumero * 1000 + "mm");
    break;
  case "cm":
    alert("O Resultado é " + valorNumero * 100 + "cm");
    break;
  case "dm":
    alert("O Resultado é " + valorNumero * 10 + "dm");
    break;
  case "dam":
    alert("O Resultado é " + valorNumero / 100 + "dam");
    break;
  case "km":
    alert("O Resultado é " + valorNumero / 1000 + "km");
    break;
  default:
    alert("O valor de medida informado não corresponde as opções...");
}
