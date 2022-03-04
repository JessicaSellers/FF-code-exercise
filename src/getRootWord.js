export function getRootWord(words) {
  const wordArray = [];

  words.toUpperCase().split(" ").forEach((word) => {
    if (word.slice(-3) === "PZL") {
      wordArray.push(word.slice(0, -3) + "AZ");
    } else if (word.slice(-3) === "EZL") {
      wordArray.push(word.slice(0, -3) + "R");
    } else if (word.slice(-1) === "L") {
      wordArray.push(word.slice(0, -1));
    } else if (word.slice(-2) === "LZ") {
      wordArray.push(word.slice(0, -2));
    } else if (word.slice(-3) === "EVM") {
      wordArray.push(word.slice(0, -3));
    } else if (word.slice(-2) === "ZQ") {
      wordArray.push(word.slice(0, -2));
    } else {
      wordArray.push(word);
    }
  });

  return wordArray;
}
