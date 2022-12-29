import readlineSync from 'readline-sync';

const maxRounds = 3;

const playGame = (playRound, gameCondition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameCondition);
  for (let i = 0; i < maxRounds; i += 1) {
    const [question, correctAnswer] = playRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer.toString()) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
