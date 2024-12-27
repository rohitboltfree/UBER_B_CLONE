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
    })

  return (

    // we have to wrap our whole application using context
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
            {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
