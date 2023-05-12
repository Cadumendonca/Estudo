let velocidade = 100;

do {
  console.log("O carro está a " + velocidade + " km/h");
  velocidade -= 20;
  console.log("Diminuindo 20 km/h");
} while (velocidade > 0);
console.log("Velocidade final: " + velocidade + " km/h");
