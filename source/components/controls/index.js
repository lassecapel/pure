import style from './Controls.css';

export default React => {
  const {
    number, shape, func,
  } = React.PropTypes;

  const controls = ({totalSlides, toggleText, currentIdx, actions: { addSlide, deleteSlide, toggleMode }}) => {
    const onToggleClick = (ev) => {
      ev.preventDefault();
      toggleMode();
    };
    const onDeleteClick = (ev) => {
      ev.preventDefault();
      deleteSlide();
    };
    const onAddClick = (ev) => {
      ev.preventDefault();
      addSlide();
    };

    return (
      <div className={style.controls}>
        <ul>
          <li><a href="#" onClick={onToggleClick}>{toggleText}</a></li>
          <li><a href="#" onClick={onAddClick}>add slide</a></li>
          <li><a href="#" onClick={onDeleteClick}>delete</a></li>
        </ul>
        <small>slide {currentIdx} van {totalSlides}</small>
      </div>
    );
  };

  controls.propTypes = {
    totalSlides: number,
    currentIdx: number,
    actions: shape({
      addSlide: func.isRequired,
      deleteSlide: func.isRequired,
      toggleMode: func.isRequired,
    })
  };

  return controls;
};
