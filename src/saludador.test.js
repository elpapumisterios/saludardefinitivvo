import { saludar, saludarEnIdioma, saludarSegunHora } from "./saludador.js";

test("saludar con nombre devuelve Hola, nombre!", () => {
  expect(saludar("Laura")).toBe("Hola, Laura!");
});

test("saludar sin nombre devuelve Hola, desconocido!", () => {
  expect(saludar("")).toBe("Hola, desconocido!");
});

test("saludarEnIdioma en inglés", () => {
  expect(saludarEnIdioma("Laura", "ingles")).toBe("Hello, Laura!");
});

test("saludarEnIdioma sin nombre devuelve 'desconocido'", () => {
  expect(saludarEnIdioma("", "frances")).toBe("Bonjour, desconocido!");
});

test("saludarSegunHora antes de mediodía", () => {
  expect(saludarSegunHora("Laura", 9)).toBe("Buenos días, Laura!");
});

test("saludarSegunHora después de las 18", () => {
  expect(saludarSegunHora("Laura", 20)).toBe("Buenas noches, Laura!");
});
