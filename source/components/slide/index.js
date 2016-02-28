import createTitle from '../title';
import createContent from '../content';
import { PropTypes } from 'react';
import style from './Slide.css';

export default React => {
  const Slide = ({title, text, id, mode, actions: { editSlide }}) => {
    const Title = createTitle(React);
    const Content = createContent(React);
    const titleProps = { title };
    const contentProps = { text };
    let titleEl;
    let textEl;

    const onBlur = ev => {
      ev.preventDefault();
      if (!titleEl.value.trim()) {
        return;
      }
      editSlide({
        id,
        title: titleEl.value,
        text: textEl.value
      });
    };

    return mode === 'edit' ? (
      <div className={ style.slide }>
        <form className="form" >
          <input
            className={style.input}
            type="text"
            ref={node => titleEl = node }
            defaultValue={title}
            onBlur={onBlur}
          />
          <textarea
            className={style.textarea}
            type="textarea"
            ref={node => textEl = node }
            defaultValue={text}
            onBlur={onBlur}
          />
        </form>
      </div>
    ) : (
      <div className={ style.slide }>
        <Title {...titleProps} />
        <Content {...contentProps} />
        <p className={style.slideCount}>{id}</p>
      </div>
    );
  };

  Slide.contextTypes = {
    store: PropTypes.object,
    editSlide: PropTypes.func
  };

  return Slide;
};
