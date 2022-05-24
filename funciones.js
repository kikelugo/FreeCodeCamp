function mostrarMensaje() {
  console.log("¡Hola Mundo!");
}

mostrarMensaje();

function sumar(a, b) {
  //a y b son parámetros
  var suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
// Podemos definir variables también para que pasen como argummentos.

var x = 5;
var y = 3;

sumar(x, y); // Estos valores que estamos pasando, se denominan argumentos.
sumar(8, 9);
sumar(5, 5);
