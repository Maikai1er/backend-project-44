import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const number = getRandomNumber(0, 20);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};

const playPrime = () => {
  playGame(prime, gameCondition);
};

export default playPrime;
