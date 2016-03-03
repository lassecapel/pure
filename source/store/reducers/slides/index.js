import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';
import { persistentReducer } from 'redux-pouchdb';

const assign = Object.assign;
const slideId = (state) =>
  state.reduce((maxId, s) => Math.max(s.sid, maxId), -1) + 1;

const slide = (state, action) => {
  const { type, sid, title, text } = action;
  switch (type) {
    case ADD_SLIDE:
      return {
        sid,
        title,
        text,
      };
    case EDIT_SLIDE:
      return assign({}, state, { title, text });
    default:
      return state;
  }
};

const slides = (state = [], action) => {
  switch (action.type) {
    case ADD_SLIDE:
      return [
        ...state,
        slide(undefined, {
          ...action,
          sid: slideId(state),
        })
      ];
    case EDIT_SLIDE:
      return state.map(s => s.sid === action.sid ? slide(s, action) : s);
    case DELETE_SLIDE:
      return state.filter(s => s.sid !== action.sid);
    default:
      return state;
  }
};

export default persistentReducer(slides);
