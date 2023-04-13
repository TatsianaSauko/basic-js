const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = []
  let len = matrix[0].length - 1
  while (len >= 0) {
    let prom = []
    for (let i = 0; i < matrix.length; i ++) {
      prom.push(matrix[i][len])
    }
    len -= 1
    res.push(prom)
  }
  let sum = 0
  for (let i = 0; i < res.length; i ++) {
    let ind = res[i].indexOf(0)
    if (ind !== -1) {
      sum += res[i].slice(0, ind).reduce(function(sum, current) {
        return sum + current;
      }, 0);
    } else {
      sum += res[i].reduce(function(sum, current) {
        return sum + current;
      }, 0);
    }

  }
  return sum

}

//
// console.log(getMatrixElementsSum([
//   [0],
// ]))
module.exports = {
  getMatrixElementsSum
};
