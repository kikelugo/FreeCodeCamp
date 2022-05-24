/*
Define una funcion proximoEnLaFila que tome un arreglo y un numero (elemento)como argumentos . Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento que fue removido.
*/

function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // agregar al final del arreglo
  return arreglo.shift(); // Remover el primer elemento del arreglo
}

var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Después: " + JSON.stringify(miArreglo));
