const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayStr = String(n).split('')
  let arrayNumber = arrayStr.map(i => Number(i))
  if (arrayNumber[1] > arrayNumber[0]) {
    return Number(arrayNumber.splice(1).join(''))
  } else {
    let minNumber = Math.min(...arrayNumber)
    let ind = arrayNumber.indexOf(minNumber)
    arrayNumber.splice(ind, 1)
    return Number(arrayNumber.join(''))
  }
}

module.exports = {
  deleteDigit
};
