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
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const addition = options.addition !== undefined ? String(options.addition) : '';

  const additionArr = Array(options.additionRepeatTimes).fill(addition).join(additionSeparator);
  return result = Array(options.repeatTimes).fill(`${str}${additionArr}`).join(separator);
}

module.exports = {
  repeater
};
