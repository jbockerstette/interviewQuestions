const assert = require("assert");
const { getMostCommonWord } = require("../src/interviewQuestions");

describe("Interview Questions", function() {
  it("should find the most common word.", function() {
    const str = "A big big animal.";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
  it("should find the most common word.", function() {
    const str = "big";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
  it("should find the most common word.", function() {
    const str = "A         big big animal.";
    const mostCommon = getMostCommonWord(str);
    assert.equal(mostCommon, "big", "should be big");
  });
});
