function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
  };
  
  function caesarCipher(str, shift) {
    const shiftChar = (char) => {
      const isUpperCase = char === char.toUpperCase();
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const index = alphabet.indexOf(char.toUpperCase());
  
      if (index === -1) {
        return char;
      }
  
      let shiftedIndex = (index + shift) % 26;
      // Manejar valores negativos para shift
      shiftedIndex = shiftedIndex < 0 ? shiftedIndex + 26 : shiftedIndex;
  
      const shiftedChar = alphabet.charAt(shiftedIndex);
  
      return isUpperCase ? shiftedChar : shiftedChar.toLowerCase();
    };
  
    return str.split('').map(shiftChar).join('');
  }
  
  function analyzeArray(arr) {
    const average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    return { average, min, max, length };
  }
  
  module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
  };