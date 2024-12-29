import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainProtectedWraper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [isloading, setIsLoading]= useState(true);

    useEffect( ()=>{
        if(!token){
            navigate('/captain-home')
        }
    },[token] )

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then( response =>{
        if(response.status === 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch( err =>{
        console.log(err)
        navigate('/captain-login')
    })

    if(isloading){
        return(
            <div>Loading...</div>
        )
    }



  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtectedWraper
