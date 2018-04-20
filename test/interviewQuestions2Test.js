const assert = require("assert");
const { repeatify } = require("../src/interviewQuestions2");

describe.only("repeatify", function() {
  it("should repeat the string 3 times", function() {
    String.prototype.repeatify = String.prototype.repeatify || repeatify;
    assert.equal("hello".repeatify(3), "hellohellohello");
  });
});
