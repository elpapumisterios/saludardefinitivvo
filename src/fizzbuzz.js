/*export function fizzbuzz(n) {
  return "1";
}
export function fizzbuzz(n) {
  return String(n);
}
export function fizzbuzz(n) {
  if (n % 3 === 0) return "Fizz";
  return String(n);
}
export function fizzbuzz(n) {
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
};*/
export function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

