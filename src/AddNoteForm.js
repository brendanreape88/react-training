import React, {Component} from 'react'
import AppContext from './AppContext'

class AddNoteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boolShowForm: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    static contextType = AppContext
    
    handleClick = (event) => {
        const showForm = this.state.boolShowForm
        this.setState({
            boolShowForm: !showForm
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const newNoteName = this.context.handleAddNote(event.target.newNoteName.value)
        const newNoteId = this.context.handleAddNote(event.target.newNoteId.value)
        const newNoteMessage = this.context.handleAddNote(event.target.newNoteMessage.value)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>add note</button>
                    {this.state.boolShowForm &&
                        <form onSubmit={this.context.handleAddNote}>
                            <input 
                                type="text" 
                                placeholder="name"
                                name="newNoteName"
                            >
                            </input>
                            <input 
                                type="text" 
                                placeholder="message"
                                name="newNoteMessage"
                            >
                            </input>
                            <input
                                tyoe="text"
                                placeholder="id number"
                                name="newNoteId"
                            >
                            </input>
                            <button>submit</button>
                        </form>
                    }
            </div>
        )
    }
}

export default AddNoteForm