const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined || arguments.length < 2) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase().split('')
    key = key.repeat(Math.ceil(message.length/key.length)).toUpperCase().split('').slice(0, message.length)
    let result = []
    for (let i = 0; i < message.length; i++) {
      if (!(alphabet.includes(message[i]))) {
        result.push(message[i])
        key.splice(i, 0, message[i])
        // console.log(key)
      } else {
        let index = alphabet.indexOf(message[i]) + alphabet.indexOf(key[i])
        if (index > 25) {
          result.push(alphabet[index % 26])
        } else {
          result.push(alphabet[index])
        }

      }
    }
    return this.value === true ? result.join('') : result.reverse().join('')
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined || arguments.length < 2) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase().split('')
    key = key.repeat(Math.ceil(message.length/key.length)).toUpperCase().split('').slice(0, message.length)
    let result = []


    for (let i = 0; i < message.length; i++) {
      if (!(alphabet.includes(message[i]))) {
        result.push(message[i])
        key.splice(i, 0, message[i])
      } else {
        let index = alphabet.indexOf(message[i]) - alphabet.indexOf(key[i])
        if (index < 0) {
          result.push(alphabet[25 + index + 1])
        } else {
          result.push(alphabet[index])
        }
      }
    }
    return this.value === true ? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
