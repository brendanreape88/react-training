import React, {Component} from 'react'
import AppContext from './AppContext'

class Note2 extends Component {
    static contextType = AppContext

    handleClickDelete(event) {
        event.preventDefault()
        const noteId = this.props.id
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.content}</h3>
                <button 
                    onClick={()=>this.context.handleClickDelete(this.props.id)}>
                        delete me
                </button>
            </div>
        )
    }
}

export default Note2