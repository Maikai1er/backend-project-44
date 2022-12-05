#!/usr/bin/node node#
import { greeting, pattern } from '../src/index.js';

const progression = () => {
  const progressionArray = [];
  let progressionToString = '';
  // Defining first number of progression;
  let valueOfProgression = Math.floor(Math.random() * 20);
  let correctAnswer;
  // Defining progression length;
  const min = 5;
  const max = 11;
  const progressionLength = Math.floor(Math.random() * (max - min) + min);
  const hiddenElementNumber = Math.floor(Math.random() * (progressionLength - min) + min);
  // Defining progression step;
  const progressionStep = Math.floor(Math.random() * 10);
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
  const name = greeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const isTrue = pattern(progression());
    if (isTrue === false) break;
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};
export default playProgression;
