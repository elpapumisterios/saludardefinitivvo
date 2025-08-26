import { saludarEnIdioma, saludarSegunHora,saludarPorGenero, saludarPorEdad} from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombreInput = document.querySelector("#nombre");
  const idiomaSelect = document.querySelector("#idioma");
  const generoSelect = document.querySelector("#genero");
  const edadInput = document.querySelector("#edad");
  const btnSaludar = document.querySelector("#btn-saludar");
  const resultadoSaludo = document.querySelector("#resultado-saludo");

  btnSaludar.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const idioma = idiomaSelect.value;
    const genero = generoSelect.value;
    const edad = Number(edadInput.value);
    const horaActual = new Date().getHours();

    

    let saludo = saludarEnIdioma(nombre, idioma);
  
    const saludoGenero = saludarPorGenero(nombre, genero);
    const saludoEdad = saludarPorEdad(nombre, edad);
    saludo += " " + saludarSegunHora(nombre, horaActual);

   
    resultadoSaludo.innerHTML = `
      <p>${saludoIdioma}</p>
      <p>${saludoHora}</p>
      <p>${saludoGenero}</p>
      <p>${saludoEdad}</p>
    `;
    
  });
});
