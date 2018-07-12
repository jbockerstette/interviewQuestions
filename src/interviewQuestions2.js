// Write a new native function on the string object that will repeat the
// string n times.
function repeatify(n) {
  let a = "";
  for (let index = 0; index < n; index++) {
    a = a + this.toString();
  }
  return a;
}

// Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
function createBase(base) {
  return function(val) {
    return val + base;
  };
}

// How would you use closure to create a private counter.
function createCounter() {
  let counter = 0;
  return {
    incrementCounter: function() {
      counter++;
    },
    decrementCounter: function() {
      counter--;
    },
    getCount: function() {
      return counter;
    }
  };
}

// Using the JavaScript language, have the function
// QuestionsMarks(str) take the str string parameter, which
// will contain single digit numbers, letters, and question marks,
// and check if there are exactly 3 question marks between every
// pair of two numbers that add up to 10. If so, then your program
// should return the string true, otherwise it should return the
// string false. If there aren't any two numbers that add up to
// 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your
// arrb,???,xxbl,???eee -> slit by number.
//
// program should return true because there are exactly 3 question
// marks between 6 and 4, and 3 question marks between 5 and 5 at
// the end of the string.
function QuestionsMarks(str) {
  let result = "";
  let numPair = [];
  let questionCount = 0;
  str.split("").forEach(char => {
    if (result !== "false") {
      if (/\d/.test(char)) {
        numPair.push(Number(char));
      }
      if (numPair.length === 1 && /\?/.test(char)) {
        questionCount++;
      }
      if (numPair.length === 2) {
        if (numPair[0] + numPair[1] === 10) {
          if (questionCount === 3) {
            result = "true";
          } else {
            result = "false";
          }
        }
        numPair = [];
        questionCount = 0;
      }
    }
  });
  if (result === "") {
    result = "false";
  }
  return result;
}

// Have the function LongestWord(sen) take the
// sen parameter being passed and return the largest word in the string. If
// there are two or more words that are the same length, return the first word
// from the string with that length. Ignore punctuation and assume sen will
// not be empty.
function longestWord(sen) {
  let longestWord = "";
  sen.split(/\W/).forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

module.exports = {
  repeatify,
  createBase,
  createCounter,
  QuestionsMarks,
  longestWord
};
