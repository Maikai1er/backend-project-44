import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '*':
      return firstNumber * secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      throw new Error(`Operation ${operator} is not supported`);
  }
};
const calc = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(operator, firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

const playCalc = () => {
  playGame(calc, gameCondition);
};
export default playCalc;
