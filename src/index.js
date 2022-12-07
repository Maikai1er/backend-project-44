import readlineSync from 'readline-sync';

let name;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomNumber = (min = 0, max = 50) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

const gamePattern = (playRound) => {
  let n = 0;
  for (let i = 0; i < 3; i += 1) {
    const correctAnswer = playRound();
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer?.toString() === userAnswer.toString()) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (n === 3) console.log(`Congratulations, ${name}!`);
};

export { gamePattern, greeting, getRandomNumber };
