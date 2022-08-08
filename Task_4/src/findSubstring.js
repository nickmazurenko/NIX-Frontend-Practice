/**
 *
 * @param {String} str string to search in
 * @param {String} substr string to find
 * @returns {String} the found word
 */

const findSubstring = (str, substr) => {
  const regex = new RegExp(substr, "i");
  return str.split(/\s/).find((str) => regex.test(str));
};
