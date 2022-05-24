// Una variable global se puede usar en cualquier parte del programa
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal);
}

miFuncion();

console.log(miVariableGlobal);
