const testString = (string) => {
  let brackets = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === "(" || char === "[" || char === "{") {
      brackets.push(char);
      continue;
    }

    const lastBracket = brackets.at(-1);

    if (char === ")") {
      if (lastBracket !== "(") return false;
      brackets.pop();
    } else if (char === "]") {
      if (lastBracket !== "[") return false;
      brackets.pop();
    } else if (char === "}") {
      if (lastBracket !== "{") return false;
      brackets.pop();
    }
  }

  return brackets.length === 0;
};
