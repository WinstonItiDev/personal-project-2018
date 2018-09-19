
import React from 'react'

let audioContext
let osc

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }

    this.initOsc = this.initOsc.bind(this)
    this.stopOsc = this.stopOsc.bind(this)
  }

  componentWillMount() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    audioContext = new AudioContext()
    // this.initOsc()

  }

  initOsc(note) {

    osc = audioContext.createOscillator()
    osc.connect(audioContext.destination)
    osc.frequency.value = note
    osc.start(0)

  }

  stopOsc() {
    osc.stop()
  }

  render() {

    return (
      <div>
        <button onMouseEnter={() => this.initOsc(250)} onMouseLeave={this.stopOsc}>1</button>
        <button onMouseEnter={() => this.initOsc(290)} onMouseLeave={this.stopOsc}>2</button>
        <button onMouseEnter={() => this.initOsc(300)} onMouseLeave={this.stopOsc}>1</button>
        <button onMouseEnter={() => this.initOsc(400)} onMouseLeave={this.stopOsc}>2</button>
      </div>

    )
  }
}

export default App
