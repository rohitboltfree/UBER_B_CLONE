import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { instance } from '../lib/axios'
import Cookies from 'js-cookie';


const UserLogout = () => {

    const navigate = useNavigate()

    const handleLogout=async()=>{
        const token = localStorage.getItem('token')
        const resp = await instance.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        })
        // remove cookie
        Cookies.remove('token')
        if(resp.data && resp.data.success){
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

  return (
    <div className='h-screen grid place-items-center'>
      <button className='px-6 py-2 bg-gray-600 text-white rounded-lg ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserLogout
