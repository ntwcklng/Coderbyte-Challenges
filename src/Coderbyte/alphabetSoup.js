// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

'use strict';

let alphabetSoup = (str) => {
  return str.split('').sort(function(a, b) {
    return a > b;
  }).join('');
}

module.exports = alphabetSoup;