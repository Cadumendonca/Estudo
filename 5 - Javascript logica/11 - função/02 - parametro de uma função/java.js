function dobro(x) {
  alert("o dobro de " + x + " é " + x * 2);
}

// dobro(5);
// dobro(7);

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Isaac");
// dizerOla();

function soma(a, b) {
  alert("Resultado da soma é " + (a + b));
}
// soma(7, 6);
// soma(1, 1);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome: nome, // mesmo que nome : nome
    email: email,
    senha: senha,
    tipo: tipo,
  };

  console.log(usuario);
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const novousuario = {
    nome: nome, // mesmo que nome : nome
    email: email,
    senha: senha,
    tipo: tipo,
  };

  console.log(novousuario);
}

criarUsuario("Isaac", "isaac@email.com", "1234");
criarUsuario("isaac@email.com", "Isaac", "1234");

novoUsuario("Isaac", "isaac@email.com", "1234");
