import { createStore } from 'redux';

const defaultState = {
  loggedInUser: {
    userName: 'Cameron Blazevich',
    email: 'cameron.blazevich@gmail.com',
  },
  pokerThoughtsVideos: [],
  polkerHandsVideos: [],
  vlogVideos: [],
  trainingProducts: [],
  pokerThoughtsPlaylistId: 'PLFZTVU_cpCnubbV-pY4f7wg13rEzXbAeO',
  polkerHandsPlaylistId: 'PLFZTVU_cpCnsE_KqKYjAE132HywfN1vrt',
  vlogPlaylistId: 'PLFZTVU_cpCnvrAMVyoALKyfVVimTR9l4Z',
  labModules: [],
  selectedModuleId: -1,
  selectedLabModuleDetails: { sections: [] },
};

function appStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_POKER_THOUGHTS_VIDEOS':
      return Object.assign({}, state, {
        // videos: state.videos.concat([{ videos: action.videos }]),
        pokerThoughtsVideos: action.videos,
      });
    case 'ADD_TRAINING_PRODUCTS':
      return Object.assign({}, state, {
        trainingProducts: action.trainingProducts,
      });
    case 'ADD_LAB_DETAILS':
      return Object.assign({}, state, {
        labModules: action.labModules,
      });
    case 'LAB_MODULE_SELECTED':
      return Object.assign({}, state, {
        selectedLabModuleId: action.moduleId,
        selectedLabModuleDetails: { sections: [] },
      });
    case 'LAB_MODULE_DETAILS_LOADED':
      return Object.assign({}, state, { selectedLabModuleDetails: action.labInfo });
    case 'ADD_POLKER_HANDS_VIDEOS':
      return Object.assign({}, state, { polkerHandsVideos: action.videos });
    case 'ADD_VLOG_VIDEOS':
      return Object.assign({}, state, { vlogVideos: action.videos });
    default:
      return state;
  }
}

export default createStore(appStore);
