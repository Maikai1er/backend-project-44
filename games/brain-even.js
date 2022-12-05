#!/usr/bin/node node#
import { greeting, pattern } from '../src/index.js';

const evenOrOdd = () => {
  // Random number definition
  const number = Math.floor(Math.random() * 100);
  let correctAnswer;
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return correctAnswer;
};

const playEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const isTrue = pattern(evenOrOdd());
    if (isTrue === false) break;
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};

export default playEven;
