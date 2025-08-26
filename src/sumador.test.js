
import {sumar, multiplicar, dividir} from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
})
describe("Dividir", () => {
  it("deberia dividir dos numeros", () => {
    expect(dividir(6, 2)).toEqual(3);
  });
})

describe (fizzbuzz, () => {
  test("deberia devolver fizz si el numero es multiplo de 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });
  test("deberia devolver buzz si el numero es multiplo de 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  test("deberia devolver fizzbuzz si el numero es multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
  test("deberia devolver el numero si no es multiplo de 3 ni de 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });
})

