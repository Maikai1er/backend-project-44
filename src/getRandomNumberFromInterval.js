const getRandomNumber = (min = 0, max = 50) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

export default getRandomNumber;
