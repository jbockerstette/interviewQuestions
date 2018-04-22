const assert = require("assert");
const {
  repeatify,
  createBase,
  createCounter
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
describe.only("createCounter", function() {
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
