import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What is the result of the expression?';

const calculate = (operators, firstNumber, secondNumber) => {
  const randomFunction = getRandomNumber(0, 2);
  let correctAnswer;
  const question = `Question: ${firstNumber} ${operators[randomFunction]} ${secondNumber}`;
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
  return [correctAnswer, question];
};
const calc = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const [correctAnswer, question] = calculate(operators, firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

const playCalc = () => {
  playGame(calc, gameCondition);
};
export default playCalc;
