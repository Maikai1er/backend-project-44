import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const evenOrOdd = () => {
  const number = getRandomNumber(0, 100);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer.toString()];
};

const playEvenOrOdd = () => {
  playGame(evenOrOdd, gameCondition);
};

export default playEvenOrOdd;
