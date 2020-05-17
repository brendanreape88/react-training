import React from 'react'

const AppContext = React.createContext({
    App: {},
    Child: {},
    GrandChild: {},
    GreatGrandChild: {},
    GreatestGrandChild: {},
    //Do you need these empty objects in here? 
    //What about for the note data?
    //You DO need this empty function for
    //handleClickDelete though!
    handleClickDelete: () => {},
})

export default AppContext