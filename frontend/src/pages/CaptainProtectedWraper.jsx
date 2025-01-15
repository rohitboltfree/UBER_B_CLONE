import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';
import { instance } from '../lib/axios';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captain-home');
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`);

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching captain profile: ", err);
        navigate('/captain-login');
      }
    };

    fetchCaptainProfile();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default CaptainProtectedWrapper;


// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {CaptainDataContext} from '../context/CaptainContext'

// const CaptainProtectedWraper = ({children}) => {

//     const token = localStorage.getItem('token')
//     const navigate = useNavigate();
//     const {captain, setCaptain} = useContext(CaptainDataContext);
//     const [isloading, setIsLoading]= useState(true);

//     useEffect( ()=>{
//         if(!token){
//             navigate('/captain-home')
//         }
//     },[token] )

//     axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//     }).then( response =>{
//         if(response.status === 200){
//             setCaptain(response.data.captain)
//             setIsLoading(false)
//         }
//     }).catch( err =>{
//         console.log(err)
//         navigate('/captain-login')
//     })

//     if(isloading){
//         return(
//             <div>Loading...</div>
//         )
//     }



//   return (
//     <div>
//       {children}
//     </div>
//   )
// }

// export default CaptainProtectedWraper
