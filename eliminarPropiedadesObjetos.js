var curso = {
  titulo: "Aprendizaje en Javascript desde cero",
  idioma: "Español",
  duracion: 30,
};

// Para borrar una propiedad usamos la palabra delete

console.log(curso.duracion);

delete curso.duracion;

console.log(curso.duracion);
