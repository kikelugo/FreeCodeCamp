/* 
*** Secuencias de escape  ***
Código | Resultado
------------------------
\'       Comilla Simple
\"       Comilla Doble
\\       Barra Invertida
\n       Línea Nueva
\r       Retorno de Carro
\t       Tabulación
\b       Retroceso
\f       Salto de página
.....
*/

var nombre = "Enrique\nEduardo";
console.log(nombre);

var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " con freeCodeCamp";

console.log(mensaje);

var mensajeCompleto = "Estoy aprendiendo a codear ";
var parteFinal = "con freeCodeCamp";

mensajeCompleto += parteFinal;

console.log(mensajeCompleto);
