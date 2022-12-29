import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const gameCondition = 'What number is missing in the progression?';

const generateProgression = (length, hiddenElement, step, firstValue) => {
  const progression = [];
  let value = firstValue;
  for (let i = 0; i < length; i += 1) {
    progression.push(value);
    value += step;
  }
  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const progressionToString = progression.join(' ');
  return [progressionToString, answer];
};

const progression = () => {
  const min = 5;
  const max = 10;
  const length = getRandomNumber(min, max);
  const hiddenElement = getRandomNumber(min, length);
  const step = getRandomNumber(1, 10);
  const firstValue = getRandomNumber();
  const [progressionToString, answer] = generateProgression(length, hiddenElement, step, firstValue);
  const correctAnswer = answer;
  const question = `Question: ${progressionToString}`;
  return [question, correctAnswer.toString()];
};

const playProgression = () => {
  playGame(progression, gameCondition);
};

export default playProgression;
