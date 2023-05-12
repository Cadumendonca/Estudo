let dinheiro = prompt("Dinheiro disponivel:");
menu = "";

do {
  menu = prompt(
    "Você tem " +
      dinheiro +
      " o que deseja fazer?" +
      "\n1)Adicionar dinheiro?" +
      "\n2)Remover dinheiro?" +
      "\n3)Sair"
  );
  if (menu == "1") {
    dinheiro =
      parseFloat(dinheiro) + parseFloat(prompt("Quanto deseja adicionar?"));
  } else if (menu == "2") {
    dinheiro -= prompt("Quanto deseja remover?");
  }
} while (menu != "3");
alert("Você finalizou o programa com R$:" + dinheiro);
alert("O programa encerrou");
