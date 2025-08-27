
import { fizzbuzz } from "./fizzbuzz.js";

test("devuelve '1' si ingreso 1", () => {
  expect(fizzbuzz(1)).toBe("1");
});

test("devuelve '2' si ingreso 2", () => {
  expect(fizzbuzz(2)).toBe("2");
});
