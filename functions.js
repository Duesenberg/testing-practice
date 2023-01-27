//capitalize first letter from string
const capitalize = (string) => {
  let capitalized = '';

  string.trim();

  for(let i = 0; i < string.length; i++) {
    let letter;

    if (i === 0) letter = string[i].toUpperCase();
    else letter = string[i];

    capitalized += letter;
  }

  return capitalized;
}

//reverse a string
const reverseString = (string) => {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    let letter = string[i];

    reversed += letter;
  }

  return reversed;
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

//caesar's cipher

const caesarCipher = (string, shift) => {
  let cipher = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '.' || string[i] === ',' || string[i] === ' ') {
      let char = string[i];
      cipher += char;
    } 
    else {
      let uniCode = charToUnicode(string[i]);
  
      uniCode += shift;
  
      if (uniCode > 122) uniCode -= 26;
      else if (uniCode < 97) uniCode += 26;
  
      let char = unicodeToChar(uniCode);
  
      cipher += char;
    }
  }

  return cipher;
}

const charToUnicode = (char) => {
  let charCode = char.charCodeAt(0);
  return charCode;
} 

const unicodeToChar = (code) => {
  let char = String.fromCharCode(code);
  return char;
} 

//analyze array
const analyzeArray = (array) => {
  let sum = 0;
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (min > array[i]) min = array[i];

    if (max < array[i]) max = array[i];  }

  return {
    average: sum / array.length,
    min,
    max,
    length: array.length
  };
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};