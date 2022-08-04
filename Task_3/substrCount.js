const substrCount = (input, needle, offset, length) => {
  const string = input.slice(offset, offset + length);
  return string.split(needle).length - 1;
};
