import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What is the result of the expression?';

const calc = () => {
  const operators = ['+', '-', '*'];
  const randomFunction = getRandomNumber(0, 2);
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  let correctAnswer;
  const question = `${firstNumber} ${operators[randomFunction]} ${secondNumber}`;
  // eslint-disable-next-line default-case
  switch (operators[randomFunction]) {
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
  }
  return [question, correctAnswer.toString()];
};

const playCalc = () => {
  playGame(calc, gameCondition);
};
export default playCalc;
