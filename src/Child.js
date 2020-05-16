import React, { Component } from 'react'
import GrandChild from './GrandChild'

class Child extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <GrandChild
                    name="GrandChild"
                    text="I'm a grandchild component."
                    deepText={this.props.deepText} 
                />
            </div>
        )
    }
}

export default Child