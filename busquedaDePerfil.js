var contactos = [
  {
    nombre: "Nora",
    apellido: "Cuevas",
    numero: "5512089735",
    gustos: ["Pizza", "Derecho"],
  },
  {
    nombre: "Arizbe",
    apellido: "Cuevas",
    numero: "5572000760",
    gustos: ["Sushi", "Administración"],
  },
  {
    nombre: "Enrique",
    apellido: "Lugo",
    numero: "5540723537",
    gustos: ["Sushi", "Programación"],
  },
];

// Si la propiedad existe, retorna la propiedad, de lo contrario muestra el mensaje "La propieda no existe".

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}

console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Harry", "apellido"));
