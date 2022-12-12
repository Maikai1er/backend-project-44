#!/usr/bin/env node
import _ from 'lodash';
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gcd = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const divisorsOfFirstNumber = [];
  const divisorsOfSecondNumber = [];
  const maxValue = Math.max(firstNumber, secondNumber);
  for (let i = 0; i <= maxValue; i += 1) {
    if (firstNumber % i === 0) divisorsOfFirstNumber.push(i);
    if (secondNumber % i === 0) divisorsOfSecondNumber.push(i);
  }
  const intersection = _.intersection(divisorsOfFirstNumber, divisorsOfSecondNumber);
  const correctAnswer = intersection[intersection.length - 1];
  return [gameCondition, question, correctAnswer];
};

const playGcd = () => {
  playGame(gcd);
};

export default playGcd;
