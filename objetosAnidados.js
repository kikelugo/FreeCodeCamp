var miReceta = {
  descripcion: "Mi postre favorito",
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: "100 grs",
      sal: "1 cucharadita",
      agua: "1 taza",
    },
    cobertura: {
      azucar: "120 grs",
      chocolate: "4 cucharadas",
      mantequilla: "200 grs",
    },
  },
};

//Notacion punto
console.log("----------------Notacion de punto-----------------------------");
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);
console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
// Notacion corchetes
console.log(
  "----------------Notacion de corchetes-----------------------------"
);
console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);
console.log(miReceta.ingredientes.cobertura["azucar"]);
console.log(miReceta.ingredientes.cobertura["chocolate"]);
console.log(miReceta.ingredientes.cobertura["mantequilla"]);
