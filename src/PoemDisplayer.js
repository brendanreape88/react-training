import React, {Component} from 'react'
import AppContext from './AppContext'

class PoemDisplayer extends Component {
    static contextType = AppContext

    render() {
        const poem = this.context.Haikus.find(p => 
            p.id === this.context.Haikus.id)
        return (
            <div>
                <h3>{poem.name}</h3>
                <p>{poem.text}</p>
            </div>
        )
    }
}

export default PoemDisplayer