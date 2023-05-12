const nome = prompt("Digite o seu nome:");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (sim/nao)");

while (continuar === "sim") {
  let cidade = prompt("Qual é o nome da cidade?");
  // cidades = cidades + cidade pode ser usado cidades += cidade para concatenar
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou outra cidade? (sim/nao)");
}
alert("Olá " + nome + " você visitou " + contagem + "\ncidades: \n" + cidades);
