import { ADD_SLIDE, DELETE_SLIDE, EDIT_SLIDE} from '../constants/ActionTypes'
const assign = Object.assign;
const initialState = [
  {
    id: 1,
    title: 'Change me..',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin dictum enim sed convallis. Pellentesque viverra justo sit amet nibh malesuada, dictum mattis orci mollis. Nunc ut lectus in ex lobortis suscipit.'
  }
];

export default (
  state = initialState, {action} = {}) => {
  switch (action.type) {
    case ADD_SLIDE:
      return [
        {
          id: state.reduce((maxId, slide) => Math.max(slide.id, maxId), -1) + 1,
          title: action.title,
          text: action.text
        },
        ...state
      ]

    case DELETE_SLIDE:
      return state.filter(slide =>
        slide.id !== action.id
      )

    case EDIT_SLIDE:
      return state.map(slide =>
        slide.id === action.id ?
          assign({}, slide, {
            title: action.title
            text: action.text }) :
          slide
      )

    case COMPLETE_SLIDE:
      return state.map(slide =>
        slide.id === action.id ?
          assign({}, slide, { completed: !slide.completed }) :
          slide
      )

    default:
      return state
  }
}
