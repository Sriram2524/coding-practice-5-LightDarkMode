// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {text: false}

  onChange = () => {
    this.setState(prevState => ({text: !prevState.text}))
  }

  getChange = () => {
    const {text} = this.state
    if (text) {
      return {
        buttonText: 'Dark Mode',
        backgroundColor: 'white-card',
        heading: 'dark-color',
      }
    }
    return {
      buttonText: 'Light Mode',
      backgroundColor: 'dark-card',
      heading: 'white-color',
    }
  }

  render() {
    const changeOver = this.getChange()
    return (
      <div className="bg-container">
        <div className={`card ${changeOver.backgroundColor}`}>
          <h1 className={`head ${changeOver.heading}`}>Click To Change Mode</h1>
          <button onClick={this.onChange} className="button" type="button">
            {changeOver.buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
