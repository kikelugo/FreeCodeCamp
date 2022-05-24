// var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
// console.log(numeroAleatorioEntre0y19);

// Generar un entero aleatorio entre 0 y el limite superior
// Superior (sin incluirlo)

function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}

// console.log(generarEnteroAleatorio(5));
// console.log(generarEnteroAleatorio(5));

for (var i = 0; i < 15; i++) {
  console.log(generarEnteroAleatorio(5));
}
