// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const UserDataContext = createContext();

// const UserContext = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             axios.get(`${import.meta.env.VITE_BASE_URL}/users/login`, {
//                 headers: {
//                     Authorization: `bearer ${token}`
//                 }
//             })
//             .then(response => {
//                 if (response.status === 200 && response.data) {
//                     console.log('User data fetched:', response.data);
//                     setUser(response.data);
//                 }
//             })
//             .catch(err => {
//                 console.error('Error fetching user data:', err);
//                 localStorage.removeItem('token');
//             });
//         }
//     }, []);

//     return (
//         <UserDataContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserDataContext.Provider>
//     );
// };

// export default UserContext;

import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

// if we donot pass children in usercontext we can only see userconstext page in every link/page because we just wrap the whole application with usercontext
const UserContext = ({children}) => {
    
    const [user, setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    });

  return (

    // we have to wrap our whole application using context
    
      <UserDataContext.Provider value={{user, setUser}}>
            {children}
      </UserDataContext.Provider>
  )
}

export default UserContext
