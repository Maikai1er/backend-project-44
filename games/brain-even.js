import readlineSync from 'readline-sync';

const evenOrOdd = () => {
  // Even or Odd Game
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    // Random number definition
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const yesOrNo = readlineSync.question('Your answer: ');
    if ((yesOrNo === 'yes') && (number % 2 === 0)) {
      console.log('Correct!');
      i += 1;
    } else if ((yesOrNo === 'no') && (number % 2 !== 0)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) console.log(`Congratulations, ${name}!`);
};
export default evenOrOdd;
