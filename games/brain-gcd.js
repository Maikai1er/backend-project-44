#!/usr/bin/node node#
import _ from 'lodash';
import { greeting, pattern, getRandomNumber } from '../src/index.js';

const gcd = () => {
  const firstNumber = getRandomNumber(0, 30);
  const secondNumber = getRandomNumber(0, 30);
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

const playGcd = () => {
  greeting();
  console.log('Find the greatest common divisor of given numbers.');
  pattern(gcd);
};

export default playGcd;
