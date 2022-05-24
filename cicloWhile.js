// While se utiliza cuando no tenemos un numero definido de iteraciones pero si sabemos que debemos hacer para continuar el proceso.

// var i = 0;
// while (i <= 3) {
//   console.log("Hola mundo");
//   i++;
// }

// Agregar elementos a un arreglo con un ciclo while

// var miArreglo = [];
// var i = 0;

// console.log(miArreglo);

// while (i < 10) {
//   miArreglo.push(i);
//   i++;
// }

// console.log(miArreglo);

//Eliminar objetos de un arreglo con ciclo while

var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop();
}

console.log(numeros);
