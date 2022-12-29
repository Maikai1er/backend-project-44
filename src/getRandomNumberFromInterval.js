const getRandomNumber = (min = 0, max = 50) => Math.floor(Math.random() * (max + 1 - min) + min);

export default getRandomNumber;
