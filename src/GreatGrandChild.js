import React, { Component } from 'react'
import GreatestGrandChild from './GreatestGrandChild'

class GreatGrandChild extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <button onClick={this.props.handleNestedClick}>change text back</button>
                <GreatestGrandChild 
                    handleTruthiness={this.props.handleTruthiness}
                />
            </div>
        )
    }
}

export default GreatGrandChild