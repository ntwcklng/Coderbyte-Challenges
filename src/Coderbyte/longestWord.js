// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
'use strict';
let longestWord = (sen) => {
  let stripSpecialChars = sen.replace(/[^\w\s]/gi, '');
  let words = stripSpecialChars.split(' ');
  let longest = [0, ''];

  for (var i = 0; i < words.length; i++) {
    if(words[i].length > longest[0]) {
      longest[0] = words[i].length;
      longest[1] = words[i];
    }
  }
  return longest[1];

}

module.exports = longestWord;