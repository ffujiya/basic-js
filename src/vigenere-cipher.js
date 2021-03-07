const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    if(isDirect === undefined) this.direct = true;
    else this.direct = isDirect;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error('No arguments!');
    }
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [];
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    const shifts = key.map(letter => ALPHABET.indexOf(letter));
    let index = 0;
    let shiftsCounter = 0;
    for (let i = 0; i < message.length; i++) {
      if (ALPHABET.includes(message[i])) {
        index = ALPHABET.indexOf(message[i]) + shifts[shiftsCounter++];
        if (shiftsCounter == shifts.length) shiftsCounter = 0;
        if (index >= 26) index -= 26;
        result[i] = ALPHABET[index];
      }
      else {
        result[i] = message[i];
      }
    }
    if(this.direct) return result.join('');
    else return result.reverse().join('');
    
  }

  decrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error('No arguments!');
    }
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [];
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');  
    const shifts = key.map(letter => ALPHABET.indexOf(letter));
    let index = 0;
    let shiftsCounter = 0;
    for (let i = 0; i < message.length; i++) {
      if (ALPHABET.includes(message[i])) {
        index = ALPHABET.indexOf(message[i]) - shifts[shiftsCounter++];
        if (shiftsCounter == shifts.length) shiftsCounter = 0;
        if (index < 0) index += 26;
        result[i] = ALPHABET[index];
      }
      else {
        result[i] = message[i];
      }
    }
    if(this.direct) return result.join('');
    else return result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;