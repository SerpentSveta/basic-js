const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) return false;
  for (let i = 0; i < n.length; i += 1) {
    if (i % 3 === 2) {
      if (n[i] !== '-') return false;
    } else {
      const charCode = n[i].charCodeAt(0);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 70)
      ) {
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
