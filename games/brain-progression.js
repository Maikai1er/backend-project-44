#!/usr/bin/node node#
import { greeting, gamePattern, getRandomNumber } from '../src/index.js';

const progression = () => {
  const progressionArray = [];
  let progressionToString = '';
  // Defining first number of progression;
  let valueOfProgression = getRandomNumber();
  let correctAnswer;
  // Defining progression length;
  const min = 5;
  const max = 11;
  const progressionLength = getRandomNumber(min, max);
  const hiddenElementNumber = getRandomNumber(min, progressionLength);
  // Defining progression step;
  const progressionStep = getRandomNumber(1, 10);
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
  console.log(`Question: ${progressionToString}`);
  return correctAnswer;
};

const playProgression = () => {
  greeting();
  console.log('What number is missing in the progression?');
  gamePattern(progression);
};
export default playProgression;
