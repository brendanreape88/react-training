import React, {Component} from 'react'
import Note from './Note'

class NoteList extends Component {
    render() {
        const noteGenerator = this.props.noteData
        return (
            <div>
                <ul>
                    {noteGenerator.map(data => 
                        <li key={data.id}>
                            <Note  
                                id={data.id} 
                                name={data.name}
                                content={data.content}
                                handleClickDelete={this.props.handleClickDelete} 
                            />
                        </li>
                    )}
                </ul>
                <button>add a note</button>
            </div>
        )
    }
}

export default NoteList