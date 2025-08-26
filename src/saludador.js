// Saludo básico
export function saludar(nombre) {
  if (!nombre || nombre.trim() === "") {
    return "Hola, desconocido!";
  }
  return `Hola, ${nombre}!`;
}

// Saludo personalizado con idioma
export function saludarEnIdioma(nombre, idioma) {
  if (!nombre || nombre.trim() === "") {
    nombre = "desconocido";
  }

  switch (idioma.toLowerCase()) {
    case "ingles":
      return `Hello, ${nombre}!`;
    case "frances":
      return `Bonjour, ${nombre}!`;
    case "portugues":
      return `Olá, ${nombre}!`;
    default:
      return saludar(nombre);
  }
}

// Saludo dependiendo la hora
export function saludarSegunHora(nombre, hora) {
  if (!nombre || nombre.trim() === "") {
    nombre = "desconocido";
  }

  if (hora < 12) {
    return `Buenos días, ${nombre}!`;
  } else if (hora < 18) {
    return `Buenas tardes, ${nombre}!`;
  } else {
    return `Buenas noches, ${nombre}!`;
  }
}


export function saludarPorGenero(nombre, genero) {
  if (!nombre || nombre.trim() === "") {
    nombre = "desconocido";
  }

  switch (genero.toLowerCase()) {
    case "masculino":
      return `Hola, señor ${nombre}!`;
    case "femenino":
      return `Hola, señora ${nombre}!`;
    default:
      return `Hola, ${nombre}!`;
  }
}


