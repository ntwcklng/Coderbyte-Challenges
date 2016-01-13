// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

'use strict';
let letterCapitalize = (str) => {
  let strSplit = str.split(' ');
  let retStr = strSplit;
  for (var i = 0; i < retStr.length; i++) {
    retStr[i] = retStr[i].replace(retStr[i][0], retStr[i][0].toUpperCase());
  }
  return retStr.join(' ');
}

module.exports = letterCapitalize;