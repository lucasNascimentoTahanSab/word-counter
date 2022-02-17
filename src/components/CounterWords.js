import '../stylesheets/Counter.css'

function CounterWords(props) {
  return (
    <div className='wc-counter'>
      <h2 className='wc-counter__title'>Words</h2>
      <h2>{countWordsInContent(props.content)}</h2>
    </div>
  );
}

function countWordsInContent(content) {
  if (!content) return 0

  const contentWords = content.split(' ')

  return contentWords.length
}

export default CounterWords