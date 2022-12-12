#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumberFromInterval.js';

const progression = () => {
  const gameCondition = 'What number is missing in the progression?';
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
  const question = `Question: ${progressionToString}`;
  return [gameCondition, question, correctAnswer];
};

const playProgression = () => {
  playGame(progression);
};

export default playProgression;
