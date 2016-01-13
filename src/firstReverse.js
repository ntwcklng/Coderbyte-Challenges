// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
'use strict';
let firstReverse = (str) => {
  return str.split('').reverse().join('');
}

module.exports = firstReverse;