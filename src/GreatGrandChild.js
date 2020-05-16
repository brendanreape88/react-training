import React, { Component } from 'react'

class GreatGrandChild extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        alert('Yo this worked!')
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <button onClick={this.handleClick}>change text</button>
            </div>
        )
    }
}

export default GreatGrandChild