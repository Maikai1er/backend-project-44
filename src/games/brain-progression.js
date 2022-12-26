import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = (progressionLength, hiddenElementNumber, progressionStep) => {
  const progressionArray = [];
  let progressionToString = '';
  let correctAnswer;
  // Defining first number of progression;
  let valueOfProgression = getRandomNumber();
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(valueOfProgression);
    valueOfProgression += progressionStep;
    if (i === (hiddenElementNumber - 1)) {
      correctAnswer = valueOfProgression;
      progressionToString += '.. ';
    } else {
      progressionToString += `${valueOfProgression} `;
    }
  }
  return [progressionToString, correctAnswer];
};

const progression = () => {
  const min = 5;
  const max = 11;
  const length = getRandomNumber(min, max);
  const hiddenElementNumber = getRandomNumber(min, length);
  const step = getRandomNumber(1, 10);
  const [progressionString, correctAnswer] = generateProgression(length, hiddenElementNumber, step);
  const question = `Question: ${progressionString}`;
  return [question, correctAnswer.toString()];
};

const playProgression = () => {
  playGame(progression, gameCondition);
};

export default playProgression;
