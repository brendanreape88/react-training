import React, { Component } from 'react'
import AppContext from './AppContext'

class GreatestGrandChild extends Component {
    static contextType = AppContext

    render() {
        let yeay
        if(this.context.TorF){
            console.log("Yeay it's true!")
            yeay = "Yeay it's true!"
        } else {
            console.log("Boo it's false!")
            yeay = "Boo it's false"
        }
        return (
            <div>
                <h1>{this.context.GreatestGrandChild.name}</h1>
                <h3>Hi. I am not receiving props from any parent component.</h3>
                <h5>{this.context.GreatestGrandChild.text}</h5>
                <h1>{yeay}</h1>
                <button onClick={this.props.handleTruthiness}>change truthiness</button>
            </div>
        )
    }
}

export default GreatestGrandChild