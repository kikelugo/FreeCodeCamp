var miPerro = {
  nombre: "Cocoliso",
  edad: 18,
  peso: 26,
  raza: "Husky",
};

console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);

// Se puede usar la notación de cocrchetes [] para acceder a las propiedades de un objeto.

console.log(miPerro["nombre"]);
console.log(miPerro["edad"]);
console.log(miPerro["peso"]);
console.log(miPerro["raza"]);

console.log(
  "Mi perro se llama " +
    miPerro.nombre +
    " tiene " +
    miPerro.edad +
    " meses" +
    " pesa " +
    miPerro.peso +
    " kilos" +
    " y es un " +
    miPerro.raza
);
