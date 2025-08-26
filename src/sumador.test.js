
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

