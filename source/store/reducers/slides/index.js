import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';

const assign = Object.assign;


const todo = (state, { type, id, title, text}) => {
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
        todo(undefined, {
          id: state.reduce((maxId, slide) => Math.max(slide.id, maxId), -1) + 1,
          title,
          text,
          type,
        })
      ];

    case DELETE_SLIDE:
      return state.filter(slide => slide.id !== id);

    case EDIT_SLIDE:
      return state.map(slide =>
        slide.id === id ?
          assign({}, slide, {
            title,
            text}) :
          slide
      );
    default:
      return state;
  }
};

export default slides;
