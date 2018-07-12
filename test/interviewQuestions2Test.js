const assert = require("assert");
const {
  repeatify,
  createBase,
  createCounter,
  QuestionsMarks,
  longestWord
} = require("../src/interviewQuestions2");

describe("repeatify", function() {
  it("should repeat the string 3 times", function() {
    String.prototype.repeatify = String.prototype.repeatify || repeatify;
    assert.equal("hello".repeatify(3), "hellohellohello");
  });
});
describe("createBase", function() {
  it("should create a function so we can add base value.", function() {
    const addSix = createBase(6);
    assert.equal(addSix(10), 16, "should be 16");
  });
});
describe("createCounter", function() {
  it("should create a private counter.", function() {
    const c1 = createCounter();
    const c2 = createCounter();
    c1.incrementCounter();
    c2.incrementCounter();
    c2.incrementCounter();
    assert.equal(c1.getCount(), 1, "should be 1");
    assert.equal(c2.getCount(), 2, "should be 2");
    assert.notEqual(
      c1.getCount(),
      c2.getCount(),
      "should each have a different count"
    );
  });
});
describe("QuestionsMarks", function() {
  it("should check for question marks between number pairs adding to 10.", function() {
    assert.equal(QuestionsMarks("acc?7??sss?3rr1??????5"), "true");
    assert.equal(QuestionsMarks("aa6?9"), "false");
    assert.equal(QuestionsMarks("arrb6???4xxbl5???eee5"), "true");
  });
});
describe.only("longestWord", function() {
  it("should return the longest word.", function() {
    assert.equal(longestWord("fun&!! time"), "time");
    assert.equal(longestWord("I love dogs"), "love");
  });
});
