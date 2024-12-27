import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  
  const [email,setEmail] = useState('');
  const [password, setPassword]= useState('');
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState('');
  const [userData, setUserData]  = useState({});


  const submitHandler = (e)=>{
    e.preventDefault();
    
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    })
   
    console.log(userData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  }


  return (
    <div className='p-5  h-screen flex flex-col justify-between'>
    <div>
      <img className='w-14  mb-5' src="https://pngimg.com/d/uber_PNG24.png " alt="uber-image" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      } } >
        <h3 className='text-base font-medium mb-2'>What's your Name</h3>
        <div className='flex gap-4 mb-5'>
          <input
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value)
            }}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Firstname' />
          <input
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value)
            }}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Lastname' />
        </div>

        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-5 placeholder:text-sm ' required type="email" placeholder='email@youremail.com' />

        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
          className='bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placeholder:text-sm ' required type="password" placeholder='enter your password' />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-base ' >SignUp</button>
        <div className='flex w-full justify-center'>
          <p className='text-center'>Already have account ?   </p>
          <Link to='/captain-login' className='text-blue-600'> Sign-In</Link>
        </div>
      </form>

    </div>
    <div>
      <p className='text-[12px] leading-tight '> This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span> and <span className='underline'>Terms of Service apply</span>. </p>
    </div>
  </div>
  )
}

export default CaptainSignup
