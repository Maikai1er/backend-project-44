import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return findGcd(secondNumber, firstNumber % secondNumber);
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
