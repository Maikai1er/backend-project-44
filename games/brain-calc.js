#!/usr/bin/node node#
import { greeting, pattern, getRandomNumber } from '../src/index.js';

const calc = () => {
  // Searching for a random function
  // 0 is a '*', 1 is a '+', 2 is a '-'
  const randomFunction = Math.floor(Math.random() * 3);
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
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
  const name = greeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const isTrue = pattern(calc());
    if (isTrue === false) break;
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};
export default playCalc;
