function seleccionarIdioma(valor) {
  var idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;

    case 2:
      idioma = "Francés";
      break;

    case 3:
      idioma = "Italiano";
      break;

    default:
      idioma = "Inglés";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(4));
