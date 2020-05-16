import React, { Component } from 'react'
import GrandChild from './GrandChild'

class Child extends Component {
    static defaultProps = {
        color: 'GREEN, brought to you by... default props!',
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.text}</h3>
                <h5>{this.props.deepText}</h5>
                <h6>{this.props.color}</h6>
                <GrandChild
                    name="GrandChild"
                    text="I'm a grandchild component."
                    deepText={this.props.deepText}
                    onClick={this.props.handleNestedClick}
                />
            </div>
        )
    }
}

export default Child