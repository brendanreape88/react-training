import React from 'react'

class Profile extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.info.name}</h1>
                <h1>{this.props.info.gen}</h1>
            </div>
        )
    }
}

export default Profile