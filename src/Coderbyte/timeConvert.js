// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

'use strict';

let timeConvert = (num) => {
  let getHours = (num > 60) ? Math.round(num / 60) : '0';
  let getMinutes = (num > 60) ? num - (getHours * 60) : num;

  return '' + getHours + ':' + getMinutes;
}

module.exports = timeConvert;