import React, { Component } from 'react'
import AppContext from './AppContext'

class GreatestGrandChild extends Component {
    static contextType = AppContext

    render() {
        return (
            <div>
                <h1>GreatestGrandChild</h1>
                <h3>Hi. I am not receiving props from any parent component.</h3>
                <h5>{this.context.text}</h5>
            </div>
        )
    }
}

export default GreatestGrandChild