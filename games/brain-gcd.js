import readlineSync from 'readline-sync';
import _ from 'lodash';

const gcd = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const arrayOfDivisorsNumber1 = [];
  const arrayOfDivisorsNumber2 = [];
  const maxValue = Math.max(firstNumber, secondNumber);
  for (let i = 0; i <= maxValue; i += 1) {
    if (firstNumber % i === 0) arrayOfDivisorsNumber1.push(i);
    if (secondNumber % i === 0) arrayOfDivisorsNumber2.push(i);
  }
  const intersection = _.intersection(arrayOfDivisorsNumber1, arrayOfDivisorsNumber2);
  const correctAnswer = intersection[intersection.length - 1];
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer.toString() === userAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again!`);
  return false;
};
export default gcd;
