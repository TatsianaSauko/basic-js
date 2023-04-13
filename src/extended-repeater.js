const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  str = String(str)
  if (str === "STRING_OR_DEFAULT") {
    return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
  }

  let strNew = ''
  if(!(options["repeatTimes"])) {
    strNew = str + options['addition']
  }
  let strAddition = ''
  if (options['additionSeparator'] && options['additionRepeatTimes']) {
    strAddition += String(options['addition'])
    for (let i = 0; i < options["additionRepeatTimes"] - 1; i ++) {
      strAddition += options['additionSeparator'] + String(options['addition'])
    }
    // console.log(strAddition)
  }
  if (!options['additionSeparator'] && options['additionRepeatTimes']) {
    strAddition += options['addition']
    for (let i = 0; i < options["additionRepeatTimes"] - 1; i ++) {
      strAddition += "|" + options['addition']
    }
    // console.log(strAddition)
  }

  if (!(options["separator"])) {
    options["separator"] = '+'
  }

  if (options["separator"]) {
    for (let i = 0; i < options["repeatTimes"]; i ++) {
      if (i !== options["repeatTimes"] - 1) {
        strNew += str + strAddition + options['separator']
      } else {
        strNew += str + strAddition
      }
    }
  }

  return strNew
}

// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
module.exports = {
  repeater
};
