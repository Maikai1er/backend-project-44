#!/usr/bin/node node#
import { greeting, gamePattern, getRandomNumber } from '../src/index.js';

const evenOrOdd = () => {
  // Random number definition
  const number = getRandomNumber(0, 100);
  let correctAnswer;
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return correctAnswer;
};

const playEvenOrOdd = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  gamePattern(evenOrOdd);
};

export default playEvenOrOdd;
