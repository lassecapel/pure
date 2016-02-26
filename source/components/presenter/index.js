import createControls from '../controls';
import createSlide from '../slide';
import createHeader from '../header';
import { connect } from 'react-redux';
import { find } from 'lodash';
import keycode from 'keycode';
import { ADD_SLIDE } from '../../store/constants/action_types';

const selectProps = (state, ownProps) => {
  console.log(state);
  return {
    visibleSlide: find(state.slides, (slide) => slide.id === Number(ownProps.params.slideId)),
    totalSlides: state.slides.length,
  };
};

const handleKeyup = (ev) => {
  const nextKeys = ['up', 'right', 'w', 'd', 'l', 'k'];
  const prevKeys = ['down', 'left', 's', 'a', 'h', 'j'];
  const navigateNext = () => { console.log('next'); };
  const navigatePrev = () => { console.log('prev'); };

  if (nextKeys.indexOf(keycode(ev)) > -1) {
    navigateNext();
    return;
  }
  if (prevKeys.indexOf(keycode(ev)) > -1) {
    navigatePrev();
    return;
  }
};

const componentDidMount = () => {
  window.addEventListener('keyup', handleKeyup);
};

export default (React) => connect(selectProps)((props) => {
  const Controls = createControls(React);
  const Slide = createSlide(React);
  const Header = createHeader(React);
  console.log('props in presenter', props);

  const addSlide = () => {
    props.dispatch({ type: ADD_SLIDE, title: 'Change me', text: 'your awesome content'});
  };

  const controlProps = {
    ...props,
    controlsClass: 'control',
    isVisible: props.controlsVisible,
    currentIdx: Number(props.params.slideId),
    actions: {
      addSlide
    },
  };

  const slideProps = {
    ...props.visibleSlide,
    key: props.visibleSlide.id,
  };

  componentDidMount();
  return (
    <div>
      <Header />
      <main>
        <Slide {...slideProps} />
      </main>
      <Controls { ...controlProps } />
    </div>
  );
});
