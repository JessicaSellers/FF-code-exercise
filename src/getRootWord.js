export function getRootWord(word) {
  if (word.slice(-3) === "PZL") {
    return word.slice(0, -3) + "AZ";
  } else if (word.slice(-3) === "EZL") {
    return word.slice(0, -3) + "R";
  } else if (word.slice(-1) === "L") {
    return word.slice(0, -1);
  } else if (word.slice(-2) === "LZ") {
    return word.slice(0, -2);
  } else if (word.slice(-3) === "EVM") {
    return word.slice(0, -3);
  } else if (word.slice(-2) === "ZQ") {
    return word.slice(0, -2);
  }
  return word;
}
