import React, { Component } from 'react'

class GreatGrandChild extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <button onClick={this.props.handleNestedClick}>change text</button>
            </div>
        )
    }
}

export default GreatGrandChild