import React from 'react';
import createControls from '../controls'

export default (props) => {
  const Controls = createControls(React);
  const controlProps = {
    ...props,
    controlsClass: "control",
    nextId: Number(props.params.slideId) +1,
    prevId: Number(props.params.slideId) -1,
  };

  return (
    <div className="presenter">
      <h1 className="presenter__title">Presenter</h1>
      { props.children }
      <Controls { ...controlProps } />
    </div>
  );
};
