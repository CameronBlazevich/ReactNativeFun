import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trainingProducts = [
  {
    id: 0,
    title: 'The Postflop Game Plan',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/The-Postflop-Engine_v2-300x195.jpg',
  },
  {
    id: 1,
    title: 'The Poker Lab',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/Upswing-Lab_v2-300x195.jpg',
  },
  {
    id: 2,
    title: 'Adv. Heads-Up Mastery Course',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Enter-Advanced-Heads-Up-Mastery.png',
  },
  {
    id: 3,
    title: 'Brains vs AI Challenge: Liberatus Analysis',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Brains-vs-Artificial-Intelligence-member-home.png',
  },
  {
    id: 4,
    title: 'PLO University',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/PLO-University.png',
  },
  {
    id: 5,
    title: 'PLO Software Tutorial',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/PLO-Software-Tutorial-HUD.png',
  },
  {
    id: 6,
    title: 'MTT Master Class',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/Tournament-Master-Class-with-Pratush-Buddiga.jpg',
  },
];

class TrainingProductApi {
  static getAllTrainingProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trainingProducts));
      }, delay);
    });
  }
}

export default TrainingProductApi;
