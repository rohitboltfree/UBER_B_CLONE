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

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const savedUser = localStorage.getItem('user');
                if (savedUser) {
                    setUser(JSON.parse(savedUser));
                } else {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/refresh-token`, {
                        method: 'POST',
                        credentials: 'include', // Ensure cookies are sent with the request
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUser(data.user);
                        localStorage.setItem('user', JSON.stringify(data.user));
                    } else {
                        console.error('Failed to refresh token:', response.statusText);
                    }
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;



// import React, { createContext, useEffect, useState } from 'react'

// export const UserDataContext = createContext()

// // if we donot pass children in usercontext we can only see userconstext page in every link/page because we just wrap the whole application with usercontext
// const UserContext = ({children}) => {


    
//     const [user, setUser] = useState({
//         email:'',
//         fullName:{
//             firstName:'',
//             lastName:''
//         }
//     });


//     useEffect(() => {
//       const fetchUser = async () => {
//           try {
//               const savedUser = localStorage.getItem('user');
//               if (savedUser) {
//                   setUser(JSON.parse(savedUser));
//               } else {
//                   const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users/refresh-token`, {
//                       method: 'POST' // Ensure cookies containing the token are sent with the request
//                   });
  
//                   if (response.ok) {
//                       const data = await response.json();
//                       setUser(data.user);
//                       localStorage.setItem('user', JSON.stringify(data.user));
//                   } else {
//                       console.error('Failed to refresh token:', response.statusText);
//                   }
//               }
//           } catch (error) {
//               console.error('Error fetching user:', error);
//           }
//       };
  
//       fetchUser();
//   }, []);
  

//   return (

//     // we have to wrap our whole application using context
    
//       <UserDataContext.Provider value={{user, setUser}}>
//             {children}
//       </UserDataContext.Provider>
//   )
// }

// export default UserContext
