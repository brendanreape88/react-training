import React from 'react'

const AppContext = React.createContext({
    App: {},
    Child: {},
    GrandChild: {},
    GreatGrandChild: {},
    GreatestGrandChild: {}
})

export default AppContext