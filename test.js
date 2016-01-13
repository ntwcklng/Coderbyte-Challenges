import test from 'ava';
import firstReverse from './src/firstReverse.js';
import firstFactorial from './src/firstFactorial.js';
import longestWord from './src/longestWord.js';
import simpleAdding from './src/simpleAdding.js';
import letterCapitalize from './src/letterCapitalize.js';
import simpleSymbols from './src/simpleSymbols.js';

test('Reverse a string', t => {
  let testString = 'Reverse me';
  let reversedString = 'em esreveR';
  t.same(firstReverse(testString), reversedString, 'String should be reversed');
});

test('Get first factorial', t => {
  let testNum1 = 4;
  let shouldOutput1 = 24;

  let testNum2 = 8;
  let shouldOutput2 = 40320;

  t.is(firstFactorial(testNum1), shouldOutput1, '4 => 24');
  t.is(firstFactorial(testNum2), shouldOutput2, '8 => 40320');
});

test('Longest Word', t => {
  let words = ['fun&!! time', 'i love dogs'];
  let output = ['time', 'love'];

  t.is(longestWord(words[0]), output[0], 'time');
  t.is(longestWord(words[1]), output[1], 'love');
});

test('Simple Adding', t => {
  let testNum = [12, 140];
  let testOutput = [78, 9870];

  t.is(simpleAdding(testNum[0]), testOutput[0], '12 => 78');
  t.is(simpleAdding(testNum[1]), testOutput[1], '140 => 9870');
});

test('Letter Capitalize', t => {
  let testStr = ['hello world', 'i ran there'];
  let outputStr = ['Hello World', 'I Ran There'];

  t.is(letterCapitalize(testStr[0]), outputStr[0], 'hello world => Hello World');
  t.is(letterCapitalize(testStr[1]), outputStr[1], 'i ran there => I Ran There');
});

test('Simple Symbols', t => {
  let testStr = ['+d+=3=+s+', 'f++d+'];

  t.true(simpleSymbols(testStr[0]), '+d+=3=+s+ => TRUE');
  t.false(simpleSymbols(testStr[1]), 'f++d+ => FALSE');
});