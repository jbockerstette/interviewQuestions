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

module.exports = { getMostCommonWord };
