
import React from 'react'
import Circle from './shapes/Circle'

class Canvas extends React.Component {

  constructor(props) {
    super(props)
    // console.log(props)

    this.state = {
      circles: []
    }
    this.clickReturnPos = this.clickReturnPos.bind(this)
  }
  
  clickReturnPos(e) {

    let newCircles = this.state.circles

    newCircles.push({
      cx: e.clientX,
      cy: e.clientY,
    })

    this.setState({
      circles: newCircles,
    })
  }

  render() {

    return (
      
        <svg className='svgCanvas' width={this.props.width} height={this.props.height} onClick={this.clickReturnPos}>
         {this.state.circles.map((circle, i)=> {
           return <Circle key={'circle' + i}x={circle.cx} y={circle.cy}/>
         })}
        </svg>

    )
  }
}

export default Canvas