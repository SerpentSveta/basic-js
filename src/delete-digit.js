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
  const arrayN = Array.from(String(n));
  let maxNumber = 0;
  for (let i = 0; i < arrayN.length; i += 1) {
    const delLastElem = [...arrayN.slice(0, i), ...arrayN.slice(i + 1)];
    const arrayToNumber = Number(delLastElem.join(''));
    if (arrayToNumber > maxNumber) {
      maxNumber = arrayToNumber;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
