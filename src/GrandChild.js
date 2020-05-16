import React, { Component } from 'react'
import GreatGrandChild from './GreatGrandChild'

class GrandChild extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <GreatGrandChild
                    name="GreatGrandChild"
                    text="I'm a great-grandchild component." 
                    deepText={this.props.deepText}
                    onClick={this.props.handleNestedClick}
                />
            </div>
        )
    }
}

export default GrandChild