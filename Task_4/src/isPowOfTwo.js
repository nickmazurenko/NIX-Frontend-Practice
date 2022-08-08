/**
 *
 * @param {Number} number given number
 * @returns {Boolean} true - if number is pow of 2, false - otherwise
 */
const isPowOfTwo = (number) => {
  return number & (number - 1) ? false : true;
};
