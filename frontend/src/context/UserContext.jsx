import React, { createContext, useEffect, useState } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const savedUser = localStorage.getItem('user');
    //             if (savedUser) {
    //                 setUser(JSON.parse(savedUser));
    //             } else {
    //                 const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/refresh-token`, {
    //                     method: 'POST',
    //                     credentials: 'include', // Ensure cookies are sent with the request
    //                 });

    //                 if (response.ok) {
    //                     const data = await response.json();
    //                     setUser(data.user);
    //                     localStorage.setItem('user', JSON.stringify(data.user));
    //                 } else {
    //                     console.error('Failed to refresh token:', response.statusText);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error fetching user:', error);
    //         }
    //     };

    //     fetchUser();
    // }, []);

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
