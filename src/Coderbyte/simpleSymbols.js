// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

'use strict';
let simpleSymbols = (str) => {
  let loopStr = str.split('');
  let returnState = true;
  for (var i = 0; i < loopStr.length; i++) {
    let match = loopStr[i].match(/[a-zA-Z]/g);
    if(match && (loopStr[i - 1] !== '+' || loopStr[i + 1] !== '+')) {
      return false;
    }
  }
  return true;
}

module.exports = simpleSymbols;