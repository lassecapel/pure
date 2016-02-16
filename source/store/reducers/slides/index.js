import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE, SET_INDEX } from '../../constants/action_types';
import { combineReducers } from 'redux';

const assign = Object.assign;
const initialSlides = [
    {
      id: 1,
      title: 'Change me..',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dictum enim sed convallis. Pellentesque viverra justo sit amet nibh malesuada, dictum mattis orci mollis. Nunc ut lectus in ex lobortis suscipit.'
    }
  ];

const slides = (state = initialSlides, {type, id, title, text} = {}) => {
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
    default:
      return state;
  }
};

function activeId (state = {activeIndex: 0}, {type, index } = {}) {
  switch (type) {
    case SET_INDEX:
      return assign({},
        ...state,
        {
          activeIndex: index
        }
      );
    default:
      return state;
  }
}

export default combineReducers({
  slides,
  activeId
});
