import React from 'react'

class Circle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {
        return (
            <circle cx={this.props.x} cy={this.props.y} r='60' />
        )
    }
}

export default Circle
