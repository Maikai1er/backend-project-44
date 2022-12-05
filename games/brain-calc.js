import readlineSync from 'readline-sync';

const calc = () => {
  // Searching for a random function
  // 0 is a '*', 1 is a '+', 2 is a '-'
  const randomFunction = Math.floor(Math.random() * 3);
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);
  let correctAnswer;
  // eslint-disable-next-line default-case
  switch (randomFunction) {
    case 0:
      console.log(`Question: ${firstNumber} * ${secondNumber}`);
      correctAnswer = firstNumber * secondNumber;
      break;
    case 1:
      console.log(`Question: ${firstNumber} + ${secondNumber}`);
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      console.log(`Question: ${firstNumber} - ${secondNumber}`);
      correctAnswer = firstNumber - secondNumber;
      break;
  }
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer.toString() === correctAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again!`);
  return false;
};
export default calc;
