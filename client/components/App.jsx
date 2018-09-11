
import React from 'react'
import Canvas from './Canvas'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }

    // this.handleClick = this.handleClick.bind(this)
  }

  render() {

    return (

      // <div>
      
        <Canvas width={this.props.width} height={this.props.height}/>
      // </div>

    )
  }
}

export default App
