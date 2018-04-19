const assert = require("assert");
const { getMostCommonWord, WordFinder } = require("../src/interviewQuestions");

describe("getMostCommonWord", function() {
  it("should find the most common word big.", function() {
    const str = "A big big animal.";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
  it("should find the most common word big.", function() {
    const str = "big";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
  it("should find the most common word big with extra spaces.", function() {
    const str = "A         big big animal.";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
});
describe("hasWord", function() {
  it("should find the word big.", function() {
    const words = ["A", "big", "animal"];
    const wordFinder = WordFinder(words);
    assert.equal(wordFinder.hasWord("big"), true, "should find big");
  });
  it("should not find the word hello.", function() {
    const words = ["A", "big", "animal"];
    const wordFinder = WordFinder(words);
    assert.equal(wordFinder.hasWord("hello"), false, "should not find hello");
  });
});
