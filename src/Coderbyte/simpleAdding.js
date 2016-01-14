// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000.

'use strict';
let simpleAdding = (num) => {
  let retNum = 0;
  for (var i = 1; i <= num; i++) {
    retNum = retNum + i;
  }
  return retNum;
}

module.exports = simpleAdding;