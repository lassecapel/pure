import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE } from '../../constants/action_types';
const assign = Object.assign;
const initialState = {
  activeIndex: 0,
  slides: [
    {
      id: 1,
      title: 'Change me..',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dictum enim sed convallis. Pellentesque viverra justo sit amet nibh malesuada, dictum mattis orci mollis. Nunc ut lectus in ex lobortis suscipit.'
    }
  ],
};

export default (
  state = initialState, {type, id, title, text, index} = {}) => {
  switch (type) {
    case ADD_SLIDE:
      return [
        {
          id: state.reduce((maxId, slide) => Math.max(slide.id, maxId), -1) + 1,
          title: title,
          text: text
        },
        ...state
      ];

    case DELETE_SLIDE:
      return state.filter(slide =>
        slide.id !== id
      );

    case EDIT_SLIDE:
      return state.map(slide =>
        slide.id === id ?
          assign({}, slide, {
            title: title,
            text: text }) :
          slide
      );

    case SET_INDEX:
      return Object.assign({},
        state,
        {
          activeIndex: index,
        }
      )

    default:
      return state;
  }
};
