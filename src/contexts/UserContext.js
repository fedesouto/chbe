import React, { useContext, createContext, useState } from 'react';
import {baseUrl} from '../api/config';

export const UserContext = createContext()

let initialState = null
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(initialState)

    const resetCartId = async () => {
        setUser({ ...user, cartId: null });
        const body = { cartId: null };
        const response = await fetch(`${baseUrl}api/session/user/${user.id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const status = await response.json();
        sessionStorage.setItem('userdata', JSON.stringify(user))
        return status
    }
    return (
        <UserContext.Provider value={{ user, setUser, resetCartId }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
