// var miCuaderno = {
//   color: "verde",
//   categoria: 3,
//   precio: 4.56,
// };

// console.log(miCuaderno.hasOwnProperty("color"));
// // hasOwnProperty se usa mucho para  *** condicionales ***
// //Veamos que pasa si buscamos una propiedad en el objeto devolvera el valor false

// console.log(miCuaderno.hasOwnProperty("origen"));

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "Este objeto no tiene esa propiedad.";
  }
}

var miCuaderno = {
  color: "verde",
  categoria: 3,
  precio: 4.56,
};

console.log(verificarPropiedad(miCuaderno, "precio"));
