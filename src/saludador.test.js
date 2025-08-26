import { saludar, saludarEnIdioma, saludarSegunHora,saludarPorGenero } from "./saludador.js";

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
describe("Tests para saludarPorGenero", () => {
  
  test("Saludo masculino", () => {
    expect(saludarPorGenero("Laura", "masculino")).toBe("Hola, señor Laura!");
  });

  test("Saludo femenino", () => {
    expect(saludarPorGenero("Laura", "femenino")).toBe("Hola, señora Laura!");
  });

  test("Saludo con género desconocido", () => {
    expect(saludarPorGenero("Laura", "otro")).toBe("Hola, Laura!");
  });

  test("Saludo sin nombre", () => {
    expect(saludarPorGenero("", "masculino")).toBe("Hola, señor desconocido!");
    expect(saludarPorGenero("", "femenino")).toBe("Hola, señora desconocido!");
    expect(saludarPorGenero("", "otro")).toBe("Hola, desconocido!");
  });

});