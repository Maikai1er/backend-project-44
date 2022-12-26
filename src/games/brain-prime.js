import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const number = getRandomNumber(0, 20);
  const question = `Question: ${number}`;
  let correctAnswer;
  if (number < 2) {
    correctAnswer = 'no';
    return correctAnswer;
  }
  if (number === 2) correctAnswer = 'yes';
  let divisorsCount = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) divisorsCount += 1;
  }
  if (divisorsCount === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer.toString()];
};

const playIsPrime = () => {
  playGame(isPrime, gameCondition);
};

export default playIsPrime;
