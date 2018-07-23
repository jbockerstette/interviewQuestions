const assert = require("assert");
const { sortScores } = require("../src/countSort");
describe.only("countSort", () => {
  const HIGHEST_POSSIBLE_SCORE = 100;
  it("should sort", () => {
    const unsortedScores = [37, 89, 41, 65, 91, 91, 41, 53];
    const sorted = sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
    assert.deepEqual(sorted, [91, 91, 89, 65, 53, 41, 41, 37]);
  });
});
