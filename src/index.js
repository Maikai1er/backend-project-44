import readlineSync from 'readline-sync';

const playGame = (playRound) => {
  // Greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // Three Rounds
  let n = 0;
  for (let i = 0; i < 3; i += 1) {
    const [gameCondition, question, correctAnswer] = playRound();
    if (n === 0) console.log(gameCondition);
    console.log(question);
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

export default playGame;
