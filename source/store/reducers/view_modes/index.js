import {SET_MODE, SET_FULLSCEEN} from '../../constants/modes';
const assign = Object.assign;

export default (
    state = { mode: 'show', fullscreen: false }, { mode, fullscreen, type } = {}
  ) => {

  switch (type) {
    case SET_MODE:
      return assign({}, state, {
        mode
      });
    case SET_FULLSCEEN:
      return assign({}, state, {
        fullscreen
      });
    default:
      return state;
  }
};
