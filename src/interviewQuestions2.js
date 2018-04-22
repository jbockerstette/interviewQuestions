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

module.exports = {
  repeatify,
  createBase,
  createCounter
};
