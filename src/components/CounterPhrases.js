import '../stylesheets/Counter.css'

function CounterPhrases(props) {
  return (
    <div className='wc-counter'>
      <h2 className='wc-counter__title'>Phrases</h2>
      <h2>{countPhrasesInContent(props.content)}</h2>
    </div>
  );
}

function countPhrasesInContent(content) {
  if (!content) return 0

  const contentPhrases = content.split(/[.!?]/)

  return contentPhrases.length
}

export default CounterPhrases