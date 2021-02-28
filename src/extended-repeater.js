const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let addition = '';
  let phrase = '';
  let inputString = str!== undefined ? String(str) : '';
  let additionString = 'addition' in options ? String(options.addition) : '';
  let repeatTimes = options.repeatTimes!== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes!== undefined ? options.additionRepeatTimes : 1;
  let separator = 'separator' in options ? String(options.separator) : '+';
  let additionSeparator = 'additionSeparator' in options ? String(options.additionSeparator) : '|';

  addition = `${additionString}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, addition.length - additionSeparator.length);
  phrase = `${inputString}${addition}${separator}`.repeat(repeatTimes).slice(0, phrase.length - separator.length);
  
  return phrase;
};