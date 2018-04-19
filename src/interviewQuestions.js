// Given a string of words, return the most common word in it.
function getMostCommonWord(str) {
  let mostCommon = "";
  let wordCounts = {};
  let maxCount = 0;
  str.split(" ").forEach(word => {
    if (word) {
      if (wordCounts[word]) {
        wordCounts[word] = wordCounts[word] + 1;
      } else {
        wordCounts[word] = 1;
      }
      if (wordCounts[word] > maxCount) {
        mostCommon = word;
        maxCount = wordCounts[word];
      }
    }
  });
  return mostCommon;
}
// Your input is an array containing unsorted words. Suggest an
// efficient solution for implementing hasWord(word) which receives
// a word and returns true if it is in the array and false otherwise.
// You are not allowed to use JS Objects (maps) in your solution but
// can use Arrays. Solution time complexity is more important then it’s
// space complexity.
function WordFinder(words) {
  const dict = {};
  function encode(word) {
    return word
      .split("")
      .map(char => char.charCodeAt(0))
      .join("000");
  }
  words.forEach(word => {
    dict[encode(word)] = true;
  });
  return {
    hasWord: function hasWord(word) {
      return !!dict[encode(word)];
    }
  };
}

module.exports = { getMostCommonWord, WordFinder };
