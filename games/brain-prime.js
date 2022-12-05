#!/usr/bin/node node#
import { greeting, pattern, getRandomNumber } from '../src/index.js';

const isPrime = () => {
  const number = getRandomNumber();
  let correctAnswer;
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

const playPrime = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isTrue = pattern(isPrime());
    if (isTrue === false) break;
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};
export default playPrime;
