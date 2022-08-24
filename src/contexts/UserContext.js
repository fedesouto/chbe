import React, {useContext, createContext, useState } from 'react';

export const UserContext = createContext()

let initialState = null
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialState)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
