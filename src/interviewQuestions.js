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
// Your input is an array containing unsorted words. Suggest an
// efficient solution for implementing hasWord(word) which receives
// a word and returns true if it is in the array and false otherwise.
// You are not allowed to use JS Objects (maps) in your solution but
// can use Arrays. Solution time complexity is more important then it’s
// space complexity.
function WordFinder(words) {
  const dict = {};
  function encode(word) {
    return word
      .split("")
      .map(char => char.charCodeAt(0))
      .join("000");
  }
  words.forEach(word => {
    dict[encode(word)] = true;
  });
  return {
    hasWord: function hasWord(word) {
      return !!dict[encode(word)];
    }
  };
}

/**
Write 2 functions, which receive an array of functions as an input, 
and notify using a promise, when they are all complete. Each of the 
input functions returns a promise and resolves it when done.
Your first function should execute all the functions in the input array,
without any importance for their order, and the second one should 
execute each after the previous ended.
Both should notify its caller using a promise when they are done.
 */
function promiseAll(fnArr) {
  return Promise.all(fnArr.map(fn => fn()));
}

async function promiseInSeries(fnArr) {
  const results = [];
  for (let index = 0; index < fnArr.length; index++) {
    const fn = fnArr[index];
    const res = await fn();
    results.push(res);
  }
  return Promise.resolve(results);
}

/**
 * Question #5: Implement preceding value in a LinkedList — This function
 *  receives a value and returns the preceding value in the link list.
 * return -1 if not found.
 * If the value exist more than once, then return the first.
 * If we are asking for the first value, then return null.
 */
// const linkItem = {
// previousItem: {},
// itemValue: ""
// };

const map = new Map();
let lastItemAdded = null;
function addValue(value) {
  const newItem = {
    previousItem: lastItemAdded,
    itemValue: value
  };
  let items = map.get(value);
  if (!items) {
    map.set(value, [newItem]);
  } else {
    items.push(newItem);
  }
  lastItemAdded = newItem;
}

function getPrecedingValue(value) {
  let previousValue = -1;
  const items = map.get(value);
  if (items) {
    if (!items[0].previousItem) {
      previousValue = null;
    } else {
      previousValue = items[0].previousItem.itemValue;
    }
  }
  return previousValue;
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
  attachNext(node) {
    this.nextNode = node;
  }
}

class LinkedList {
  constructor() {
    this.startNode = null;
    this.currentNode = null;
  }
  addValue(value) {
    const newNode = new Node(value);
    if (!this.startNode) {
      this.startNode = newNode;
    }
    if (!this.currentNode) {
      this.currentNode = newNode;
    } else {
      this.currentNode.attachNext(newNode);
    }
    this.currentNode = newNode;
  }
  getPrecedingValue(value) {
    let currNode = this.startNode;
    let foundNode = null;
    let lastNode = null;
    let foundValue = -1;
    let found = false;
    while (!found && currNode) {
      if (currNode.value === value) {
        foundNode = lastNode;
        found = true;
      } else {
        lastNode = currNode;
        currNode = currNode.nextNode;
      }
    }
    if (!found) {
      foundValue = -1;
    } else if (!foundNode) {
      foundValue = null;
    } else {
      foundValue = foundNode.value;
    }
    return foundValue;
  }
}

module.exports = {
  getMostCommonWord,
  WordFinder,
  promiseAll,
  promiseInSeries,
  addValue,
  getPrecedingValue,
  LinkedList
};
