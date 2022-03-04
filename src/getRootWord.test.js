import { getRootWord } from "./getRootWord";

test.each([
  ["MZV", "MZV"],
  ["IHFULZ", "IHFU"],
  ["DUNEZL", "DUNR"],
  ["MFNDV", "MFNDV"],
  ["ZPZVKL", "ZPZVK"],
  ["UZCUZLZVKDKEPZL", "UZCUZLZVKDKEAZ"],
  ["HJKDZQ", "HJKD"],
  ["DUnJSeVM", "DUNJS"],
])("%s -> %s", (userInput, rootWord) => {
  expect(getRootWord(userInput)).toStrictEqual([rootWord]);
});
