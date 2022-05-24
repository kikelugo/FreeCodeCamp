function clasificarValor(valor) {
  var respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;

    case 2:
      respuesta = "beta";
      break;

    case 3:
      respuesta = "gamma";
      break;

    case 4:
      respuesta = "delta";
      break;

    default:
      respuesta = "El valor no está definido";
      break;
  }
  return respuesta;
}

//Como estamos retornando el valor, tenemos que mostrarlo en la consola o asignarlo a una variable.

console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
console.log(clasificarValor(5));
