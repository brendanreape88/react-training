import React, {Component} from 'react'
import Note2 from './Note2'
import AppContext from './AppContext'

class NoteList2 extends Component {
    static contextType = AppContext
    
    render() {
        const noteGenerator = this.context.Notes
        return (
            <div>
                <h3>These notes + delete buttons use context!</h3>
                <ul>
                    {noteGenerator.map(data => 
                        <li key={data.id}>
                            <Note2  
                                id={data.id} 
                                name={data.name}
                                content={data.content} 
                            />
                        </li>
                    )}
                </ul>
                <button>add a note</button>
            </div>
        )
    }
}

export default NoteList2