/**
 *
 * @param {String} string
 * @returns {String}
 */

const editNames = (string) => {
  return string.replaceAll(/(\w+), (\w+)/g, "$2 $1");
};
