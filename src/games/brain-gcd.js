import _ from 'lodash';
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  const divisorsOfFirstNumber = [];
  const divisorsOfSecondNumber = [];
  const maxValue = Math.max(firstNumber, secondNumber);
  for (let i = 0; i <= maxValue; i += 1) {
    if (firstNumber % i === 0) divisorsOfFirstNumber.push(i);
    if (secondNumber % i === 0) divisorsOfSecondNumber.push(i);
  }
  const intersection = _.intersection(divisorsOfFirstNumber, divisorsOfSecondNumber);
  return intersection[intersection.length - 1];
};

const gcd = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const question = `Question: ${firstNumber} ${secondNumber}`;
  const correctAnswer = findGcd(firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

const playGcd = () => {
  playGame(gcd, gameCondition);
};

export default playGcd;
