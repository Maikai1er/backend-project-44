#!/usr/bin/node node#
import { greeting, pattern, getRandomNumber } from '../src/index.js';

const calc = () => {
  // Searching for a random function
  // 0 is a '*', 1 is a '+', 2 is a '-'
  const randomFunction = getRandomNumber(0, 3);
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  let correctAnswer;
  // eslint-disable-next-line default-case
  switch (randomFunction) {
    case 0:
      console.log(`Question: ${firstNumber} * ${secondNumber}`);
      correctAnswer = firstNumber * secondNumber;
      break;
    case 1:
      console.log(`Question: ${firstNumber} + ${secondNumber}`);
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      console.log(`Question: ${firstNumber} - ${secondNumber}`);
      correctAnswer = firstNumber - secondNumber;
      break;
  }
  return correctAnswer;
};

const playCalc = () => {
  greeting();
  console.log('What is the result of the expression?');
  pattern(calc);
};
export default playCalc;
