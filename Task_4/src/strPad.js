/**
 *
 * @param {String} input initial string
 * @param {Number} fullLen max length of the output string
 * @param {String} fillStr filler
 * @param {String} fillType type of filling (left, right, both)
 * @returns {String} string filled with filler
 */

const strPad = (input, fullLen, fillStr, fillType = "FILL_RIGHT") => {
  if (input.length >= fullLen) return input;

  /**
   *
   * @param {String} fillStr filler
   * @param {Number} length the amount of space available for filler
   * @param {Boolean} bothSides type of filling (one, both)
   * @returns {String} filler in given length
   */
  const getFullFillStr = (fillStr, length, bothSides = false) => {
    const count = length / (bothSides ? 2 : 1) / fillStr.length;
    const leftover = (length / (bothSides ? 2 : 1)) % fillStr.length;
    return fillStr.repeat(count) + fillStr.slice(0, leftover);
  };

  let newFill = getFullFillStr(fillStr, fullLen - input.length);

  switch (fillType) {
    case "FILL_RIGHT":
      return input + newFill;
    case "FILL_LEFT":
      return newFill + input;
    case "FILL_BOTH":
      newFill = getFullFillStr(fillStr, fullLen - input.length, 1);
      return newFill + input + newFill;
  }
};
