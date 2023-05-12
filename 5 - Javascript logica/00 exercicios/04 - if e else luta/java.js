const nome1 = prompt("Digite o nome do primeiro personagem:");
let poderAtaque = prompt("Qual o poder de ataque de " + nome1 + " ?");
poderAtaque = parseFloat(poderAtaque);
let nome2 = prompt("Digite o nome do segundo personagem:");
let vida = prompt("Digite a quantidade de vida de " + nome2 + " :");
vida = parseFloat(vida);
let defesa = prompt("Digite o poder de defesa de " + nome2 + " :");
defesa = parseFloat(defesa);
let possueEscudo = confirm(nome2 + " Possue um escudo?");
console.log(possueEscudo);
let danoCausado = poderAtaque - defesa;
let vidaResta = vida - danoCausado;

if (poderAtaque <= defesa) {
  alert("O dano Causado é 0");
} else if (possueEscudo == false) {
  alert(nome1 + " causou " + danoCausado + " a " + nome2);
  alert(nome2 + "Ficou com " + vidaResta + " pontos de vida");
} else if (possueEscudo == true) {
  alert(nome1 + " causou " + danoCausado / 2 + " a " + nome2);
  alert(nome2 + "Ficou com " + vidaResta + " pontos de vida");
}
