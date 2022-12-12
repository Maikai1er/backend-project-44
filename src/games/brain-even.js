#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const evenOrOdd = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  // Random number definition
  const number = getRandomNumber(0, 100);
  let correctAnswer;
  const question = `Question: ${number}`;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return [gameCondition, question, correctAnswer];
};

const playEvenOrOdd = () => {
  playGame(evenOrOdd);
};

export default playEvenOrOdd;
