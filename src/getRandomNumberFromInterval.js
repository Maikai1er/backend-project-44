const getRandomNumber = (min = 0, max = 50) => {
  const randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomNumber;
};

export default getRandomNumber;
