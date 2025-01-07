import React, {useContext, useEffect, useState} from 'react'
import { UserDataContext } from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({children}) => {
    // this is an higher order fn that except an children and then checks if the user exists or not and then allow the use of router 

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    // console.log(token)
    useEffect( ()=>{
      const token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
        

    }, [token] )
    
    

  return (
    <>
        {children} 
    </>
  )
}

export default UserProtectedWrapper
