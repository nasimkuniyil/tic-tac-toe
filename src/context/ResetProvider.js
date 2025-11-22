import React, { createContext, useState } from 'react'

const ResetContext = createContext();

const ResetProvider = ({ children }) => {

    const [ reset, setReset] = useState(false)

    return (
        <ResetContext.Provider value={}>
            {children}
        </ResetContext.Provider>
    )
}

export default ResetProvider