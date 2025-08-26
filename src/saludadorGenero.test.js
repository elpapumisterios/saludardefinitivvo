import { saludarPorGenero } from "./saludador.js";

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
