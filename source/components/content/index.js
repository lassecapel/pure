import marked from 'marked';
export default React => ({ text }) => <div dangerouslySetInnerHTML={{__html: marked(text) }} />;
