var ordenesPizza = [
  {
    tipo: "margarita",
    tamaño: "individual",
    precio: 5.67,
    toppings: ["extra queso", "champiñones", "piña"],
    "para llevar": true,
  },
  {
    tipo: "cuatro quesos",
    tamaño: "familiar",
    precio: 18.34,
    toppings: ["extra queso", "pimenton"],
    "para llevar": false,
  },
  {
    tipo: "napolitana",
    tamaño: "individual",
    precio: 6.78,
    toppings: [],
    "para llevar": true,
  },
];

console.log(ordenesPizza[2].tipo);
console.log(ordenesPizza[2].tamaño);
console.log(ordenesPizza[2].precio);
console.log(ordenesPizza[2].toppings);
