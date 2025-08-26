import { saludarEnIdioma, saludarSegunHora } from "./saludador.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombreInput = document.querySelector("#nombre");
  const idiomaSelect = document.querySelector("#idioma");
  const btnSaludar = document.querySelector("#btn-saludar");
  const resultadoSaludo = document.querySelector("#resultado-saludo");

  btnSaludar.addEventListener("click", () => {
    const nombre = nombreInput.value;
    const idioma = idiomaSelect.value;
    const horaActual = new Date().getHours();

    let saludo = saludarEnIdioma(nombre, idioma);
    saludo += " " + saludarSegunHora(nombre, horaActual);

    resultadoSaludo.innerHTML = "<p>" + saludo + "</p>";
  });
});
