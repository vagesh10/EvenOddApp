import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  isIncreament = () => {
    const randomValue = Math.floor(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="count">Count {count}</h1>
          <p className="evenodd">Count is {isEven ? 'Even' : 'Odd'}</p>
          <button className="button" type="button" onClick={this.isIncreament}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
