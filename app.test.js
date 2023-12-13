const path = require('path');
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require(path.join(__dirname, 'app.js'));

test('capitalize function capitalizes the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});

test('reverseString function reverses the string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('')).toBe('');
});

test('calculator functions perform basic operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.multiply(2, 4)).toBe(8);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(6, 0)).toBe('Cannot divide by zero');
});

test('caesarCipher function encrypts the string with a Caesar cipher', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('XYZ', 1)).toBe('YZA');
  expect(caesarCipher('abc', -1)).toBe('zab');
});

test('analyzeArray function returns correct analysis', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
