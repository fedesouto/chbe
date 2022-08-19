import React, {useContext, createContext, useState } from 'react';

export const UserContext = createContext()

let initialState = {
    name: 'Federico',
    image: 'https://i.pinimg.com/736x/f8/63/a6/f863a649daf0cd52b63124596578ae00.jpg',
    email: 'fede@mail.com',
    address: 'calle 2323 N°1212',
    phone: '+541155223366'
}
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialState)

    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
