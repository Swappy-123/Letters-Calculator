// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}
  onMode = event => {
    this.setState({searchInput: event.target.value})
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="first">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            placeholder="Enter the phrase"
            className="inp"
            onChange={this.onMode} />
          <p className="btn">No.of letters: {count}</p>
        </div>
        <div className="second">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
