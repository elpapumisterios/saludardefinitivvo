import { sumar, multiplicar, dividir } from './sumador.js';

// Inputs y div de resultado
const num1Input = document.getElementById("primer-numero");
const num2Input = document.getElementById("segundo-numero");
const resultadoDiv = document.getElementById("resultado-div");

// Botones
const sumarBtn = document.getElementById("sumar-button");
const multiplicarBtn = document.getElementById("multiplicar-button");
const dividirBtn = document.getElementById("dividir-button");

// Función para obtener valores
function getValores() {
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);
    return { a, b };
}

// Evento Sumar
sumarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const { a, b } = getValores();
    resultadoDiv.textContent = `Resultado de Sumar: ${sumar(a, b)}`;
});

// Evento Multiplicar
multiplicarBtn.addEventListener("click", () => {
    const { a, b } = getValores();
    resultadoDiv.textContent = `Resultado de Multiplicar: ${multiplicar(a, b)}`;
});

// Evento Dividir
dividirBtn.addEventListener("click", () => {
    const { a, b } = getValores();
    try {
        resultadoDiv.textContent = `Resultado de Dividir: ${dividir(a, b)}`;
    } catch (error) {
        resultadoDiv.textContent = `Error: ${error}`;
    }
});
