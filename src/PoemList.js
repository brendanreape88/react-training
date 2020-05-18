import React, {Component} from 'react'
import {Router, Link} from 'react-router-dom'
import AppContext from './AppContext'

class PoemList extends Component {
    static contextType = AppContext

    render() {
        const poemData = this.context.Haikus

        return (
            <div>
                <ul>
                    {poemData.map(data =>
                        <li key={data.id}>
                            <Link to={`/poem/${data.id}`}>
                                <h3>{data.name}</h3>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default PoemList