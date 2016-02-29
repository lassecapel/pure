import { connect } from 'react-redux';
import { find } from 'lodash';
import { push } from 'react-router-redux';
import { ADD_SLIDE, EDIT_SLIDE, DELETE_SLIDE} from '../../store/constants/action_types';
import { SET_FULLSCEEN, SET_MODE } from '../../store/constants/modes';


import createControls from '../../components/controls';
import createKeypress from '../../components/fullscreen';
import createSlide from '../../components/slide';
import createFullscreen from '../../components/fullscreen';
import createDeck from '../../containers/Deck';


const selectProps = (state, ownProps) => {
  return {
    slides: state.slides,
    slide: find(state.slides, (slide) => slide.sid === Number(ownProps.params.slideId)),
    totalSlides: state.slides.length,
    fullscreen: state.modes.fullscreen,
    currentMode: state.modes.mode
  };
};

export default (React) => connect(selectProps)((props) => {
  const Controls = createControls(React);
  const Slide = createSlide(React);
  const Deck = createDeck(React);
  const Fullscreen = createFullscreen(React);
  const Keypress = createKeypress(React);
  const {
    slide,
    dispatch,
    fullscreen,
    currentMode
  } = props;

  const toggleFullscreen = () => dispatch({ type: SET_FULLSCEEN, fullscreen: !fullscreen});
  //Control actions
  const toggleMode = () => dispatch({type: SET_MODE, mode: currentMode === 'show' ? 'edit' : 'show' });
  const addSlide = (payload) => dispatch({type: ADD_SLIDE, title: 'Change me', text: 'Your awesome __markdown__ content'});
  const deleteSlide = () => {
    dispatch({type: DELETE_SLIDE, sid: slide.sid});
    dispatch(push('/'));
  };
  // Slide actions
  const editSlide = (payload) => dispatch({type: EDIT_SLIDE, ...payload});
  const navigateNext = () => dispatch(push(`slides/${Number(props.params.slideId) + 1}`));
  const navigatePrev = () => dispatch(push(`slides/${Number(props.params.slideId) - 1}`));

  const controlProps = {
    ...props,
    isVisible: props.controlsVisible,
    currentIdx: Number(props.params.slideId),
    toggleText: currentMode === 'show' ? 'edit' : 'preview',
    actions: {
      addSlide,
      toggleMode,
      deleteSlide
    }
  };

  const slideProps = {
    ...slide,
    mode: currentMode,
    key: slide.sid,
    isEditing: props.currentMode,
    actions: {
      editSlide,
    }
  };

  const fullscreenProps = {
    isFullscreen: fullscreen,
    onExitFullscreen: toggleFullscreen,
  };

  const keypressProps = {
    next: navigateNext,
    prev: navigatePrev,
  };

  return (
    <article>
      {fullscreen && <Keypress {...keypressProps}/>}
      <Fullscreen {...fullscreenProps} >
        <Slide {...slideProps} />
      </Fullscreen>
      <Deck />
      <Controls { ...controlProps } />
    </article>
  );
});
