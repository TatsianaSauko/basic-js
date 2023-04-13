const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = []
  let prom = 1
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === str[i + 1]) {
      prom += 1
    }
    else {
      if (prom === 1) {
        res.push(str[i])
      }else {
        res.push(`${prom}${str[i]}`)
        prom = 1
      }
    }
  }
  return res.join('')

}

module.exports = {
  encodeLine
};
