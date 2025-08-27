
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
