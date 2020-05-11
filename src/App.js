import React from 'react'
import Card from './card'
/*import Data from './data'*/
import Profile from './Profile'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isTrue: true,
      /*profileData: Data,*/
    }
  }

  render() {
    let wordDisplay
    if(this.state.isTrue) {
      wordDisplay = "Hi."
    } else {
      wordDisplay = "Bye."
    }

    const STORE = [
      {
        name: "Byron",
        gen: "male"
      },
      {
        name: "Kate",
        gen: "female"
      }
    ]

    const storeInfo = STORE.map(info => <Profile info={info} />)

    return(
      <div>
        <h1>{wordDisplay}</h1>
        <Card />
        {storeInfo}
      </div>
    )
  }
}

export default App