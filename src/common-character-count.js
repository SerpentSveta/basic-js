const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayS1 = Array.from(s1);
  const arrayS2 = Array.from(s2);
  const intersection = arrayS1.filter((element) => {
    const index = arrayS2.indexOf(element);
    if (index !== -1) {
      arrayS2.splice(index, 1);
      return true;
    }
    return false;
  });
  return intersection.length;
}

module.exports = {
  getCommonCharacterCount
};
