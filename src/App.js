import CounterLetters from './components/CounterLetters.js'
import CounterWords from './components/CounterWords.js'
import CounterPhrases from './components/CounterPhrases.js'
import './App.css'
import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.contentDivision = React.createRef()
    this.state = { content: '' }
  }

  componentDidMount() {
    this.contentDivision.current.focus()
  }

  render() {
    return (
      <div className='App' >
        <header>
          <h1>Word Counter</h1>
        </header>
        <main>
          <aside>
            <CounterLetters content={this.state.content} />
            <CounterWords content={this.state.content} />
            <CounterPhrases content={this.state.content} />
          </aside>
          <div ref={this.contentDivision} contentEditable="true" className='wc-counter__content' onInput={this._updateContent.bind(this)}></div>
        </main>
      </div>
    )
  }

  _updateContent(event) {
    this.setState({ content: event.target.textContent })
  }
}