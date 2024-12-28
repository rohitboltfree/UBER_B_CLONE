import React, {useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import {useNavigate} from 'react-router-dom'

const UserProtectedWrapper = ({children}) => {
    // this is an higher order fn that except an children and then checks if the user exists or not and then allow the use of router 

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    console.log(token)
    if(!token){
        navigate('/login')
    }
  return (
    <>
        {children} 
    </>
  )
}

export default UserProtectedWrapper
