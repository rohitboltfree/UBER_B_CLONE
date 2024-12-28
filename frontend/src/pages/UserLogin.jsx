import React, { useState ,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const {user, setUser }  = useContext(UserDataContext);
  const navigate = useNavigate()

  const submitHandler = async (e)=>{
    e.preventDefault();
    
    // setUserData({
    //   email:email,
    //   password:password
    // })
    
     const userData = {
      email:email,
      password:password
     }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
      <div>
        <img className='w-14  mb-7' src="/images/uber-img.png" alt="uber-image" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        } }>
          <h3 className='text-xl mb-2'>What's your email</h3>
          <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-7 placeholder:text-base ' required type="email" placeholder='email@youremail.com' />
          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}

          className='bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placeholder:text-base ' required type="password" placeholder='enter your password' />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' >Login</button>
          <div className='flex w-full justify-center'>
            <p className='text-center'>If You Are New ? </p>
            <Link to='/signup' className='text-blue-600'>Create New Account</Link>
          </div>
        </form>

      </div>
      <div>
         <Link to='/captain-login' className='bg-[#10b461] text-white font-semibold flex justify-center items-center mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Sign as captain</Link>
          </div>
    </div>
  )
}

export default UserLogin
