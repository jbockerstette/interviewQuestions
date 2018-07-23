function sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE) {
  // create histogram
  const hist = [];
  hist.length = HIGHEST_POSSIBLE_SCORE;
  for (let i = 0; i < unsortedScores.length; i++) {
    let count = hist[unsortedScores[i]] || 0;
    hist[unsortedScores[i]] = count + 1;
  }
  const sorted = [];
  for (let score = 0; score < hist.length; score++) {
    const count = hist[score];
    if (count) {
      for (let i = 0; i < count; i++) {
        sorted.unshift(score);
      }
    }
  }
  return sorted;
}

module.exports = {
  sortScores
};
