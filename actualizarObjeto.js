var mochila = {
  color: "azul",
  tamaño: "mediano",
  contenido: ["botella de agua", "cuaderno"],
};

console.log(mochila.color);
mochila.color = "verde";
mochila.tamaño = "grande";
mochila.contenido.push("lápiz");
mochila.contenido = [];

console.log(mochila.color);
console.log(mochila.tamaño);
console.log(mochila.contenido);
