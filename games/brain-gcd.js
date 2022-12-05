#!/usr/bin/node node#
import _ from 'lodash';
import { greeting, pattern } from '../src/index.js';

const gcd = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const divisorsOfFirstNumber = [];
  const divisorsOfSecondNumber = [];
  const maxValue = Math.max(firstNumber, secondNumber);
  for (let i = 0; i <= maxValue; i += 1) {
    if (firstNumber % i === 0) divisorsOfFirstNumber.push(i);
    if (secondNumber % i === 0) divisorsOfSecondNumber.push(i);
  }
  const intersection = _.intersection(divisorsOfFirstNumber, divisorsOfSecondNumber);
  const correctAnswer = intersection[intersection.length - 1];
  return correctAnswer;
};

const playGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const isTrue = pattern(gcd());
    if (isTrue === false) break;
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
