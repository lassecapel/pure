import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';

const assign = Object.assign;
const initialSlides = [
    {
      id: 1,
      title: 'Change me..',
      text: 'Lorem ipsum __dolor__ sit amet, consectetur adipiscing elit. Aliquam sollicitudin dictum enim sed convallis. Pellentesque viverra justo sit amet nibh malesuada, dictum mattis orci mollis. Nunc ut lectus in ex lobortis suscipit.'
    }
  ];


const todo = (state, { type, id, title, text}) => {
  switch (type) {
    case ADD_SLIDE:
      return {
        id,
        title,
        text,
        isVisible: true,
        isEditing: false,
      };
    default:
      return state;
  }
};

const slides = (state = initialSlides, {type, id, title, text} = {}) => {
  switch (type) {
    case ADD_SLIDE:
      return [
        todo(undefined, {
          id: state.reduce((maxId, slide) => Math.max(slide.id, maxId), -1) + 1,
          title,
          text,
          type,
        }),
        ...state
      ];

    case DELETE_SLIDE:
      return state.filter(slide => slide.id !== id);

    case EDIT_SLIDE:
      return state.map(slide =>
        slide.id === id ?
          assign({}, slide, {
            title: title,
            text: text }) :
          slide
      );
    default:
      return state;
  }
};

export default slides;
