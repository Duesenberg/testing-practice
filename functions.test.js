import { capitalize, reverseString, calculator, caesarCipher,
analyzeArray } from "./functions";

//testing capitalize function 
test('Capitalize', () => {
  expect(capitalize('pande')).toBe('Pande');
});

//reverse string
test('Reverse string', () => {
  expect(reverseString('pande')).toBe('ednap');
});

//calculator
test('Calculator', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(2, 3)).toBe(6);
});

//caesar cipher
test('Caesar cipher - Name, 1 letter forward', () => {
  expect(caesarCipher('pande', 1)).toBe('qboef');
});

test('Caesar cipher - Testing wrapping from z to a', () => {
  expect(caesarCipher('pande', -1)).toBe('ozmcd');
});

test('Caesar cipher - Leave ".", " " "," unchanged', () => {
  expect(caesarCipher('p, ande', -1)).toBe('o, zmcd');
});

//analyze array
test('Analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});