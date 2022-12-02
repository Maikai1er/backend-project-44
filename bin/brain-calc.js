import readlineSync from 'readline-sync';

const calc = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    //Searching for a random function
    //0 is a '*', 1 is a '+', 2 is a '-'
    const randomFunction = Math.floor(Math.random() * 3);
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    switch (randomFunction) {
      case 0:
        console.log(`Question: ${firstNumber} * ${secondNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = firstNumber * secondNumber;
        if (userAnswer.toString() === correctAnswer.toString()) {
          console.log('Correct!');
          i += 1;
        } else {
          console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again!`);
          return;
        };
        break;
      case 1:
        console.log(`Question: ${firstNumber} + ${secondNumber}`);
        const userAnswer1 = readlineSync.question('Your answer: ');
        const correctAnswer1 = firstNumber + secondNumber;
        if (userAnswer1.toString() === correctAnswer1.toString()) {
          console.log('Correct!');
          i += 1;
        } else {
          console.log(`${userAnswer1} is wrong answer ;(. Correct answer was ${correctAnswer1}.\nLet's try again!`);
          return;
        };
        break;
      case 2:
        console.log(`Question: ${firstNumber} - ${secondNumber}`);
        const userAnswer2 = readlineSync.question('Your answer: ');
        const correctAnswer2 = firstNumber - secondNumber;
        if (userAnswer2.toString() === correctAnswer2.toString()) {
          console.log('Correct!');
          i += 1;
        } else {
          console.log(`${userAnswer2} is wrong answer ;(. Correct answer was ${correctAnswer2}.\nLet's try again!`);
          return;
        };
        break;
    }
  }
  if (i === 3) console.log(`Congratulations`);
};
export default calc;