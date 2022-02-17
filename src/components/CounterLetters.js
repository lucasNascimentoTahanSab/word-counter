import '../stylesheets/Counter.css'

function CounterLetters(props) {
  return (
    <div className='wc-counter'>
      <h2 className='wc-counter__title'>Letters</h2>
      <h2>{countLettersInContent(props.content)}</h2>
    </div>
  );
}

function countLettersInContent(content) {
  if (!content) return 0

  const contentWithJustLetters = content.replace(/[\s\n]/, '')

  return contentWithJustLetters.length
}

export default CounterLetters