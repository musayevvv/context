import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const updateEmail = (newEmail) => {
        setEmail(newEmail);
        localStorage.setItem('userEmail', newEmail);
    };

    return (
        <UserContext.Provider value={{ email, updateEmail }}>
            {children}
        </UserContext.Provider>
    );
};
