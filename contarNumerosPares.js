function contarNumerosPares(arreglo) {
  var total = 0;

  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}

console.log(contarNumerosPares([1, 3, 5, 8]));
