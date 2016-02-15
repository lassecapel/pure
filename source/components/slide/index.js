import Title from '../title';
export default React => (params, title, text) => {
  return (
    <div className="slide">
      <Title title={title} titleClass="slide__title" />
      <p>{text}</p>
      <small>Slide: {params.slideId}</small>
    </div>
  );
};
