
import { fizzbuzz } from "./fizzbuzz.js";

test("devuelve '1' si ingreso 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

test("devuelve '2' si ingreso 2", () => {
  expect(fizzbuzz(2)).toBe("2");
});
test("devuelve 'Fizz' si ingreso 3", () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});
test("devuelve 'Buzz' si ingreso 5", () => {
  expect(fizzbuzz(5)).toBe("Buzz");
});
test("devuelve 'FizzBuzz' si ingreso 15", () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
});
//____________
/*test("si jugador A sacar saca 40 puntos y jugador B 20 puntos, la funcion debe devolver 'Gana A'", () => {
  expect(fizzbuzz(0,0)).toBe("gana A");
});
test("SI Jugador A saca 15 puntos: jugador A saco 15 puntos", () => {
  expect(fizzbuzz(0,0)).toBe("15");
});
test("SI Jugador B saca 15 puntos: jugador A saco 15 puntos", () => {
  expect(fizzbuzz(0,0)).toBe("15");
});

test("SI Jugador B o A empata puntos: jugador A y empate", () => {
  expect(fizzbuzz(0,0)).toBe("empate");
});*/


