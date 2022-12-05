import readlineSync from 'readline-sync';
import calc from '../games/brain-calc.js';

const pattern = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let currentGame = 0;
  while (currentGame < 3) {
    const isTrue = calc();
    currentGame += 1;
    if (isTrue === false) break;
    if (currentGame === 3) console.log(`Congratulations, ${name}!`);
  }
};
export default pattern;
