// Write a new native function on the string object that will repeat the
// string n times.
function repeatify(n) {
  let a = "";
  for (let index = 0; index < n; index++) {
    a = a + this.toString();
  }
  return a;
}

module.exports = {
  repeatify
};
