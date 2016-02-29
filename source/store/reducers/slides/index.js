import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';
import { persistentReducer } from 'redux-pouchdb';

const assign = Object.assign;


const slide = (state, { type, id, title, text}) => {
  switch (type) {
    case ADD_SLIDE:
      return {
        id,
        title,
        text,
      };
    default:
      return state;
  }
};

const slides = (state = [], {type, id, title, text} = {}) => {
  switch (type) {
    case ADD_SLIDE:
      return [
        ...state,
        slide(undefined, {
          id: state.reduce((maxId, s) => Math.max(s.id, maxId), -1) + 1,
          title,
          text,
          type,
        })
      ];

    case DELETE_SLIDE:
      return state.filter(s => s.id !== id);

    case EDIT_SLIDE:
      return state.map(s =>
        s.id === id ?
          assign({}, s, {
            title,
            text}) :
          s
      );
    default:
      return state;
  }
};

export default persistentReducer(slides);
