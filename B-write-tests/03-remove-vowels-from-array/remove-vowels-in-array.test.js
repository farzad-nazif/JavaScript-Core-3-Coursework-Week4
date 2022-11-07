let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let inputForFunction = ["Irina", "Etza", "Daniel"];
  let expectedOutput = ["rn", "tz", "Dnl"];
  let result = removeVowelsFromWords(inputForFunction);
  expect(result).toEqual(expectedOutput);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
