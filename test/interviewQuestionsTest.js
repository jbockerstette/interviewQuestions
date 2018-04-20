const assert = require("assert");
const {
  getMostCommonWord,
  WordFinder,
  promiseAll,
  promiseInSeries,
  addValue,
  getPrecedingValue,
  LinkedList
} = require("../src/interviewQuestions");
const fns = [
  function() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("1");
        resolve(1);
      }, 300);
    });
  },
  function() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("2");
        resolve(2);
      }, 200);
    });
  },
  function() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log("3");
        resolve(3);
      }, 10);
    });
  }
];
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
describe("promiseAll", function() {
  it("should run all at once.", function(done) {
    const allAtOnce = promiseAll(fns);
    allAtOnce.then(res => {
      // console.log("promiseAll results=", res);
      assert.equal(res[0], 1, "should be 1 for the first in the series");
      assert.equal(res[1], 2, "should be 2 for the second in the series");
      assert.equal(res[2], 3, "should be 3 for the third in the series");
      done();
    });
  });
});
describe("promiseInSeries", function() {
  it("should run one at a time.", function(done) {
    const inSeries = promiseInSeries(fns);
    inSeries.then(res => {
      // console.log("promiseInSeries results=", res);
      assert.equal(res[0], 1, "should be 1 for the first one to complete");
      assert.equal(res[1], 2, "should be 2 for the second one to complete");
      assert.equal(res[2], 3, "should be 3 for the third one to complete");
      done();
    });
  });
});
describe("getPrecedingValue", function() {
  const values = [1, 8, 3, 4, 5, 6, 7, 8, 9, 8];
  values.forEach(element => {
    addValue(element);
  });
  it("should get the preceding value.", function() {
    const value = getPrecedingValue(5);
    assert.equal(value, 4);
  });
  it("should get the preceding value.", function() {
    const value = getPrecedingValue(9);
    assert.equal(value, 8);
  });
  it("should return null if it is the first value.", function() {
    const value = getPrecedingValue(1);
    assert.equal(value, null);
  });
  it("should return -1 if value is not found.", function() {
    const value = getPrecedingValue(100);
    assert.equal(value, -1);
  });
  it("should return the first previous value if multiple values exist.", function() {
    const value = getPrecedingValue(8);
    assert.equal(value, 1);
  });
});
describe("Linked List", function() {
  const values = [1, 8, 3, 4, 5, 6, 7, 8, 9, 8];
  const list = new LinkedList();
  values.forEach(element => {
    list.addValue(element);
  });
  it("should get the preceding value.", function() {
    const value = list.getPrecedingValue(5);
    assert.equal(value, 4);
  });
  it("should get the preceding value.", function() {
    const value = list.getPrecedingValue(9);
    assert.equal(value, 8);
  });
  it("should return null if it is the first value.", function() {
    const value = list.getPrecedingValue(1);
    assert.equal(value, null);
  });
  it("should return -1 if value is not found.", function() {
    const value = list.getPrecedingValue(100);
    assert.equal(value, -1);
  });
  it("should return the first previous value if multiple values exist.", function() {
    const value = list.getPrecedingValue(8);
    assert.equal(value, 1);
  });
});
