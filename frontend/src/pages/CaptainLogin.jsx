import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault();
    
    setCaptainData({
      email:email,
      password:password
    })

    console.log(captainData);
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
    <div>
      <img className='w-14  mb-7' src="https://pngimg.com/d/uber_PNG24.png " alt="uber-image" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      } }>
        <h3 className='text-xl mb-2'>Enter Email</h3>
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
          <p className='text-center'>For New Captain? </p>
          <Link to='/captain-signup' className='text-[#10b461]'>Register Now</Link>
        </div>
      </form>

    </div>
    <div>
       <Link to='/login' className=' bg-[#239BE6] text-white font-semibold flex justify-center items-center mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Sign as User</Link>
        </div>
  </div>
  )
}

export default CaptainLogin
