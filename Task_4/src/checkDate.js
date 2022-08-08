/**
 *
 * @param {String} date
 * @returns {Boolean}
 */
const checkDate = (date) => {
  return RegExp(
    "^([0-9]|0[1-9]|[1-2][0-9]|3[01])-([0-9]|0[1-9]|1[012])-([0-9])+$"
  ).test(date);
};
