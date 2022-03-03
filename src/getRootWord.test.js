import { getRootWord } from "./getRootWord";

test.each([
  ["MZV", "MZV"],
  ["IHFULZ", "IHFU"],
  ["DUNEZL", "DUNR"],
  ["MFNDV", "MFNDV"],
  ["ZPZVKL", "ZPZVK"],
  ["UZCUZLZVKDKEPZL", "UZCUZLZVKDKEAZ"],
  ["HJKDZQ", "HJKD"],
  ["DUNJSEVM", "DUNJS"],
])("%s -> %s", (userInput, rootWord) => {
  expect(getRootWord(userInput)).toBe(rootWord);
});
