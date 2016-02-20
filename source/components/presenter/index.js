import createControls from '../controls';
import createSlide from '../slide';
import { connect } from 'react-redux';
import { map, filter } from 'lodash';

const selectProps = (state, ownProps) => {
  return {
    slides: filter(state.slides.slides, (slide) => {
      console.log(slide.id === ownProps.params.slideId, slide.id, ownProps.params.slideId);
      return slide.id === Number(ownProps.params.slideId);
    }),
  };
};

export default (React) => connect(selectProps)((props) => {
  const Controls = createControls(React);
  const Slide = createSlide(React);
  const controlProps = {
    ...props,
    controlsClass: 'control',
    isVisible: props.controlsVisible,
    nextId: Number(props.params.slideId) + 1,
    prevId: Number(props.params.slideId) - 1,
  };

  console.log('props in Presenter', props);

  return (
    <div className="presenter">
      <h1 className="presenter__title">Presenter</h1>
      {map(props.slides, slide => <Slide {...slide}/>)}
      <Controls { ...controlProps } />
    </div>
  );
});
