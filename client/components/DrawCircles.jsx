
import React from 'react'

class DrawCircles extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      circles : [{
        id: 1,
        x: 100,
        y: 100,
        col: "red"
      },
      {
        id: 2,
        x: 50,
        y: 50,
        col: "green"
      }]
    }

    this.deleteCircles = this.deleteCircles.bind(this)
  }

  deleteCircles(event) {
    console.log("deleted circle!")
    console.log(this.state.circles)

    let selectedCircles = this.state.circles.filter(circle=>{
      circle !== event.target.id
    })

    

    

    this.setState(selectedCircles)
  }

  render() {
    return (
      <div>
        <svg>
          {
            this.state.circles.map((circle, i) => {
              return <circle id={circle.id} key={'circle' + i} cx={circle.x} cy={circle.y} r="40" fill={circle.col} onMouseOver={this.deleteCircles} />
            })
          }
        </svg>
        
      </div>
    )
  }
}

export default DrawCircles