import React, {Component} from 'react'
import Note from './Note'

class NoteList extends Component {
    render() {
        const noteGenerator = this.props.noteData
        return (
            <div>
                <h3>These notes + delete buttons use prop-drilling!</h3>
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
            </div>
        )
    }
}

export default NoteList