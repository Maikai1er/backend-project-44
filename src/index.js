import readlineSync from 'readline-sync';

let name;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

const pattern = (correctAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer.toString() === userAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again!`);
    return false;
  }
};

export { pattern, greeting, getRandomNumber };
