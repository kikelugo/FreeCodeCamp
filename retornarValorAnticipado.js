function calcularRaizCuadrada(numero) {
  if (numero < 0) {
    return undefined;
  } else {
    return Math.sqrt(numero);
  }
}

console.log(calcularRaizCuadrada(-5));
