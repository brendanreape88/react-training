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
        const newNoteName = event.target.newNoteName.value
        const newNoteId = event.target.newNoteId.value
        const newNoteMessage = event.target.newNoteMessage.value
        this.context.handleAddNote(newNoteName, newNoteId, newNoteMessage)
    }

    render() {
        return (
            <div>
                <h3>This "add note" button uses conditional rendering to show a form.</h3>
                <button onClick={this.handleClick}>add note</button>
                    {this.state.boolShowForm &&
                        <>
                            <form onSubmit={this.onSubmitFrom}>
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
                            <h5>^^^This form uses context to update state.^^^</h5>
                        </>
                    }
                    
            </div>
        )
    }
}

export default AddNoteForm