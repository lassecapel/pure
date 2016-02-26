import { Link } from 'react-router';

export default React => {
  const {
    string, number, shape, func,
  } = React.PropTypes;

  const controls = ({ controlsClass, totalSlides, currentIdx, actions: { addSlide }}, style) => {
    const prevButton = () => currentIdx > 1 ? <li style={style.list} ><Link to={ `/slides/${currentIdx - 1}` } >prev</Link></li> : undefined;
    const nextButton = () => currentIdx < totalSlides ? <li style={style.list} ><Link to={ `/slides/${currentIdx + 1}` } >next</Link></li> : undefined;
    const slideDots = () => {
      let res = '';
      for (let idx = 0; idx < totalSlides; idx++ ) {
        const sym = idx + 1 === currentIdx ? '!' : '.';
        res = [...res, sym];
      }
      return res.join('');
    };

    return (
      <div className={controlsClass}>
        <ul style={style.list}>
          {prevButton()}
          {nextButton()}
          <li><a onClick={ (ev) => {
            ev.preventDefault();
            addSlide();
          } }>add slide</a></li>
        </ul>
        {slideDots()}
      </div>
    );
  };

  controls.propTypes = {
    controlsClass: string.isRequired,
    totalSlides: number,
    currentIdx: number,
    actions: shape({
      addSlide: func.isRequired
    })
  };

  return controls;
};
