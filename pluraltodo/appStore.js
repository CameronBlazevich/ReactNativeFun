import { createStore } from 'redux';

const defaultState = {
  loggedInUser: {
    userName: 'Cameron Blazevich',
    email: 'cameron.blazevich@gmail.com',
  },
  videos: [],
  trainingProducts: [],
  playlistId: 'PLFZTVU_cpCnubbV-pY4f7wg13rEzXbAeO',
};

function appStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return Object.assign({}, state, {
        // videos: state.videos.concat([{ videos: action.videos }]),
        videos: action.videos,
      });
    case 'ADD_TRAINING_PRODUCTS':
      return Object.assign({}, state, {
        trainingProducts: action.trainingProducts,
      });
    default:
      return state;
  }
}

export default createStore(appStore);
