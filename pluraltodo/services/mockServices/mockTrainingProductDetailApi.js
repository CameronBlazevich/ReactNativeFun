import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trainingProductDetails = [
  {
    id: 0,
    title: 'The Postflop Game Plan',
  },
  {
    id: 1,
    title: 'The Poker Lab',
  },
  {
    id: 2,
    title: 'Adv. Heads-Up Mastery Course',
  },
  {
    id: 3,
    title: 'Brains vs AI Challenge: Liberatus Analysis',
  },
  {
    id: 4,
    title: 'PLO University',
  },
  {
    id: 5,
    title: 'PLO Software Tutorial',
  },
  {
    id: 6,
    title: 'MTT Master Class',
  },
];

class TrainingProductDetailApi {
  static getAllTrainingProductDetails() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trainingProductDetails));
      }, delay);
    });
  }

  static getTrainingProductDetailById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(trainingProductDetails.find(product => product.id === id));
      }, delay);
    });
  }
}

export default TrainingProductDetailApi;
