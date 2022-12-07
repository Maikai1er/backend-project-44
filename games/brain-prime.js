#!/usr/bin/env node
import { greeting, gamePattern, getRandomNumber } from '../src/index.js';

const isPrime = () => {
  const number = getRandomNumber(0, 20);
  let correctAnswer;
  if ((number === 0) || (number === 1)) {
    correctAnswer = 'no';
    return correctAnswer;
  }
  let divisorsCount = 0;
  if (number === 2) correctAnswer = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) divisorsCount += 1;
  }
  if (divisorsCount === 0) correctAnswer = 'yes';
  else correctAnswer = 'no';
  console.log(`Question: ${number}`);
  return correctAnswer;
};

const playIsPrime = () => {
  greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  gamePattern(isPrime);
};
export default playIsPrime;
