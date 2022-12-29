import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = (length, hiddenCell, step, first) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const current = first + (step * i);
    progression.push(current);
  }
  const correctAnswer = progression[hiddenCell - 1];
  progression[hiddenCell - 1] = '..';
  const progressionToString = progression.join(' ');
  return [progressionToString, correctAnswer];
};

const progression = () => {
  const min = 5;
  const max = 10;
  const length = getRandomNumber(min, max);
  const hiddenCell = getRandomNumber(1, length);
  const step = getRandomNumber(1, 10);
  const first = getRandomNumber();
  const [progressionToString, correctAnswer] = generateProgression(length, hiddenCell, step, first);
  const question = `Question: ${progressionToString}`;
  return [question, correctAnswer.toString()];
};

const playProgression = () => {
  playGame(progression, gameCondition);
};

export default playProgression;
