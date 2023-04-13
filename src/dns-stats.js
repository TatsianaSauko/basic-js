// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newArray = []
  for (let i = 0; i < domains.length; i ++) {
    newArray.push(`.${domains[i].split('.').reverse().join('.')}`)
  }
  let allDomains = []
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j ++) {
      if(j !== 0 && (newArray[i][j] === '.' || j === newArray[i].length - 1)) {
        if (j === newArray[i].length - 1) {
          allDomains.push(newArray[i].slice(0, j + 1))
        }else {
          allDomains.push(newArray[i].slice(0, j))
        }
      }
    }
  }
  let result = allDomains.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return result
}

module.exports = {
  getDNSStats
};
