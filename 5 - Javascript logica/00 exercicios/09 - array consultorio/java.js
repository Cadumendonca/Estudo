let pacientes = [];
let menu = "";
do {
  let nomePacientes = "";
  for (let i = 0; i < pacientes.length; i++) {
    nomePacientes += i + 1 + "º - " + pacientes[i] + "\n";
  }
  menu = prompt(
    "Menu Interativo" +
      "\n" +
      nomePacientes +
      "\n1)Novo paciente" +
      "\n2)Consultar Paciente" +
      "\n3)Sair"
  );
  switch (menu) {
    case "1":
      let adicionarPaciente = prompt("Digite o nome do paciente:");
      pacientes.push(adicionarPaciente);
      break;
    case "2":
      let removido = pacientes.pop();
      alert(removido + " foi removido da fila.");
      break;
    case "3":
      alert("Obrigado por usar nossos Serviços");
      break;
  }
} while (menu !== "3");
