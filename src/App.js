import React, { Component } from 'react'
import Child from './Child'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            App: {
                name: "App",
                text: "I'm the App component.",
                deepText: "This is being passed alllll the way down"
            },
            Child: {
                name: "Child",
                text: "I'm the child component."
            },
            GrandChild: {
                name: "GrandChild",
                text: "I'm the grandchild component."
            },
            GreatGrandChild: {
                name: "GreatGrandChild",
                text: "I'm the great-grandchild component."
            },  
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        alert('I was clicked!')
        let newApp = {...this.state.App};
        newApp.deepText = "This text has changed!";
        this.setState({App: newApp});
    }

    handleNestedClick(event) {
        alert('I was clicked in the GreatGrandChild component')
        let oldApp = {...this.state.App};
        oldApp.deeptext = "This is being passed alllll the way down"
        this.setState({App: oldApp})
    }

    render() {
        
        return(
            <div>
                <h1>{this.state.App.name}</h1>
                <h3>{this.state.App.text}</h3>
                <h5>{this.state.App.deepText}</h5>
                <button onClick={this.handleClick}>change text</button>
                <Child 
                    name={this.state.Child.name}
                    text={this.state.Child.text}
                    deepText={this.state.App.deepText}
                    onClick={this.handleNestedClick}
                />
            </div>
            
        )
    }
}

export default App