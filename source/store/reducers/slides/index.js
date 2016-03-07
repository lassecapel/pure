import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';

const assign = Object.assign;
const slideId = (state) =>
  state.reduce((maxId, s) => Math.max(s.id, maxId), -1) + 1;

const slide = (state, action) => {
  const { type, id, title, text } = action;
  switch (type) {
    case ADD_SLIDE:
      return {
        id,
        title,
        text,
      };
    case EDIT_SLIDE:
      return assign({}, state, {title, text});
    default:
      return state;
  }
};

export default (state = [], action) => {
  const {id, title, text, type} = action;
  switch (action.type) {
    case ADD_SLIDE:
      return [
        ...state,
        slide(undefined, {
          ...action,
          id: slideId(state),
        })
      ];
    case EDIT_SLIDE:
      return state.map(s => s.id === id ? slide(s, {type, title, text }) : s);
    case DELETE_SLIDE:
      return state.filter(s => s.id !== id);
    default:
      return state;
  }
};
