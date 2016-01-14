import test from 'ava';
import firstReverse from './src/Coderbyte/firstReverse.js';
import firstFactorial from './src/Coderbyte/firstFactorial.js';
import longestWord from './src/Coderbyte/longestWord.js';
import simpleAdding from './src/Coderbyte/simpleAdding.js';
import letterCapitalize from './src/Coderbyte/letterCapitalize.js';
import simpleSymbols from './src/Coderbyte/simpleSymbols.js';
import checkNums from './src/Coderbyte/checkNums.js';
import alphabetSoup from './src/Coderbyte/alphabetSoup.js';
import timeConvert from './src/Coderbyte/timeConvert.js';

test('Reverse a string', t => {
  t.same(firstReverse('Reverse me'), 'em esreveR');
  t.same(firstReverse('em esreveR'), 'Reverse me');
});

test('Get first factorial', t => {
  t.is(firstFactorial(4), 24, '4 => 24');
  t.is(firstFactorial(8), 40320, '8 => 40320');
});

test('Longest Word', t => {
  t.is(longestWord('fun&!! time'), 'time', 'Longest word: time');
  t.is(longestWord('i love dogs'), 'love', 'Longest word: love');
});

test('Simple Adding', t => {
  t.is(simpleAdding(12), 78, '12 => 78');
  t.is(simpleAdding(140), 9870, '140 => 9870');
});

test('Letter Capitalize', t => {
  t.is(letterCapitalize('hello world'), 'Hello World', 'hello world => Hello World');
  t.is(letterCapitalize('i ran there'), 'I Ran There', 'i ran there => I Ran There');
});

test('Simple Symbols', t => {
  t.true(simpleSymbols('+d+=3=+s+'), '+d+=3=+s+ => TRUE');
  t.false(simpleSymbols('f++d+'), 'f++d+ => FALSE');
});

test('Check Nums', t => {
  t.true(checkNums(3, 122));
  t.false(checkNums(5, 1));
  t.is(checkNums(67, 67), '-1');
});

test('Alphabet Soup', t => {
  t.is(alphabetSoup('coderbyte'), 'bcdeeorty');
  t.is(alphabetSoup('hooplah'), 'ahhloop');
});

test('Time Convert', t => {
  t.is(timeConvert(126), '2:6');
  t.is(timeConvert(45), '0:45');
  t.is(timeConvert(63), '1:3');
});