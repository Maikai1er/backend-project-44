#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const calc = () => {
  const gameCondition = 'What is the result of the expression?';
  // Searching for a random function
  // 0 is a '*', 1 is a '+', 2 is a '-'
  const randomFunction = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  let correctAnswer;
  let question;
  // eslint-disable-next-line default-case
  switch (randomFunction) {
    case 0:
      question = `Question: ${firstNumber} * ${secondNumber}`;
      correctAnswer = firstNumber * secondNumber;
      break;
    case 1:
      question = `Question: ${firstNumber} + ${secondNumber}`;
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      question = `Question: ${firstNumber} - ${secondNumber}`;
      correctAnswer = firstNumber - secondNumber;
      break;
  }
  return [gameCondition, question, correctAnswer];
};

const playCalc = () => {
  playGame(calc);
};
export default playCalc;
