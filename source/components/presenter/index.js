import createControls from '../controls';
import { connect } from 'react-redux';

const selectProps = (state) => {
  return {
    slides: state.slides,
  };
};

export default (React) => connect(selectProps)((props) => {
  const Controls = createControls(React);
  const controlProps = {
    ...props,
    controlsClass: 'control',
    isVisible: props.controlsVisible,
    nextId: Number(props.slides.activeId) + 1,
    prevId: Number(props.slides.activeId) - 1,
  };
  console.log('props in Presenter', props);
  return (
    <div className="presenter">
      <h1 className="presenter__title">Presenter</h1>
      { props.children }
      <Controls { ...controlProps } />
    </div>
  );
});
