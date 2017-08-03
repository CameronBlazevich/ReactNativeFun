import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const labModules = [
  {
    id: 1,
    title: 'Foundations',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/01_Foundations_Rollover.png',
    sections: [
      {
        id: 0,
        title: 'Terminology',
        description: 'Start Here',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/terminology.jpg',
      },
      {
        id: 1,
        title: 'Matrices',
        description: 'Visualize Ranges of Hands. Be The One',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/matrices-300x190.png',
      },
      {
        id: 2,
        title: 'Ranges',
        description: 'You and your opponents have a single hand in practice, but a RANGE in theory',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/ranges-300x190.jpg',
      },
      {
        id: 3,
        title: 'The Four Categories',
        description: 'Rank hands like a pro',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/four-categories-300x190.png',
      },
      {
        id: 4,
        title: 'Concepts',
        description: 'Position is valuable in No limit Hold’em especially as stacks get deeper.',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/four-categories-300x190.png',
      },
    ],
  },
  {
    id: 2,
    title: 'PreFlop',
    imageLocation:
      'https://www.upswingpoker.com/wp-content/uploads/2016/11/02_PreFlop_Rollover.png',
    sections: [
      {
        id: 0,
        title: 'PreFlop Introduction',
        description: 'Preflop is the most important street. Do NOT skip this section.,',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/preflop-introduction-300x190.jpg',
      },
      {
        id: 1,
        title: 'Raised First in (RFI)',
        description: 'What to do when the action folds to you Preflop.',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/RFI-300x190.jpg',
      },
      {
        id: 2,
        title: 'RFI Vs. 3-Bet',
        description: 'Defending yourself from the ultimate preflop weapon',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/RFI-vs-3-Bet-300x190.jpg',
      },
      {
        id: 3,
        title: 'Playing Vs. A RFI',
        description: 'Creating some Preflop weapons of your own',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/playing-vs-a-RFI--300x190.jpg',
      },
      {
        id: 4,
        title: 'Deviating From the Charts',
        description: 'Be the Ball. Think outside the box.',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/deviating-from-the-charts-300x190.jpg',
      },
      {
        id: 5,
        title: 'Complete Preflop Hand Ranges',
        description:
          'Complete List of Ranges for all RFI, RFI vs 3-Bet, and Facing Raise ranges for 6 handed',
        previewImageUrl:
          'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/Complete-Preflop-Hand-Ranges-featured-image.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Post Flop Play',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/03_PostFlop_Play_Rollover.png',
    sections: [],
  },
  {
    id: 4,
    title: 'MTTs (if interested)',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/04_MTTs_Rollover.png',
    sections: [],
  },
  {
    id: 5,
    title: 'Game Elements',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/05_GameElements_Rollover.png',
    sections: [],
  },
  {
    id: 6,
    title: 'Mental Game',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/06_MentalGame_Rollover.png',
    sections: [],
  },
  {
    id: 7,
    title: 'Play and Explains',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/07_Play_and_Explains_Rollover.png',
    sections: [],
  },
  {
    id: 8,
    title: 'LabCeption',
    imageLocation:
      'https://1qfpnw417h1n3a4c4m10ltpd-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/08_Labception_Rollover.png',
    sections: [],
  },
];

class LabApi {
  static getAllLabModules() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], labModules));
      }, delay);
    });
  }
  static getLabModuleById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], labModules.filter(module => module.id === id)));
      }, delay);
    });
  }
}

export default LabApi;
