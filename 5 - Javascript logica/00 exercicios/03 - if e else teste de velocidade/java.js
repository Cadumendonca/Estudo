const nome1 = prompt("Digite o nome do primeiro veiculo");
const vel1 = prompt("Qual a velocidade do primeiro veiculo?");

const nome2 = prompt("Digite o nome do segundo veiculo");
const vel2 = prompt("Qual a velocidade do segundo veiculo?");

if (vel1 > vel2) {
  alert(nome1 + " é mais rapido que " + nome2);
} else if (vel2 > vel1) {
  alert(nome2 + " é mais rapido que " + nome1);
} else if (vel1 == vel2) {
  alert(nome1 + " e " + nome2 + " empataram");
}
