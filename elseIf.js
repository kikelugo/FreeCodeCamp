function clasificarValor(valor) {
  if (valor % 2 == 0) {
    console.log("Es divisible entre 2.");
  } else if (valor % 3 == 0) {
    console.log("Es divisible entre 3.");
  } else {
    console.log("No es divisible entre las opciones");
  }
}

// clasificarValor(2);
// clasificarValor(15);
clasificarValor(7);
