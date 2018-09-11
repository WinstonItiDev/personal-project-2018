
import React from 'react'
import Circle from './shapes/Circle'

class Canvas extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      x: 50,
      y: 50
    }
    this.clickReturnPos = this.clickReturnPos.bind(this)
  }
  
  clickReturnPos(e) {
    console.log(e.clientX, e.clientY);
    this.setState({
      x: e.clientX - 55,
      y: e.clientY
    })
  }

  render() {

    return (

        <svg className='svgCanvas' width={this.props.width} height={this.props.height} onClick={this.clickReturnPos}>
          <Circle x={this.state.x} y={this.state.y}/>
        </svg>

    )
  }
}

export default Canvas