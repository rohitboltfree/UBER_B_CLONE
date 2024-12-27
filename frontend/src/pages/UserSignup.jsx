import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext.jsx';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };

    
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user)
        navigate('/home');
      }

    
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-14 mb-5' src="/images/uber-img.png" alt="uber-image" />
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm'
              required
              type="text"
              placeholder='Firstname'
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm'
              required
              type="text"
              placeholder='Lastname'
            />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-5 placeholder:text-sm'
            required
            type="email"
            placeholder='email@youremail.com'
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placeholder:text-sm'
            required
            type="password"
            placeholder='enter your password'
          />

          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-base'>SignUp</button>
          <div className='flex w-full justify-center'>
            <p className='text-center'>Already have account ?</p>
            <Link to='/login' className='text-blue-600'> Sign-In</Link>
          </div>
        </form>
      </div>
      <div>
        <p className='text-[12px] leading-tight'>By processing, you consent to get calls, WhatsApp, or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup;


// import React, { useState } from 'react'
// import { Link ,useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { UserContext } from '../context/UserContext'

// const UserSignup = () => {

//   const [email,setEmail] = useState('');
//   const [password, setPassword]= useState('');
//   const [firstName, setFirstName]= useState('');
//   const [lastName, setLastName]= useState('');
//   const [userData, setUserData]  = useState({});
  
//   const { user, setUser } = React.useContext(UserContext);


//   const navigate = useNavigate()


//   const submitHandler = async (e)=>{
//     e.preventDefault();
    
//     const newUser = {
//       fullname:{
//         firstname:firstName,
//         lastname:lastName
//       },
//       email:email,
//       password:password
//     }

//     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
   
//     if(response.status === 201){
//       const data = response.data;
//       setUser(data.user)
//       navigate('/home')
//     }
//     // setUserData({
//     //   fullName:{
//     //     firstName:firstName,
//     //     lastName:lastName
//     //   },
//     //   email:email,
//     //   password:password
//     // })
   
//     console.log(userData);
//     setEmail('');
//     setFirstName('');
//     setLastName('');
//     setPassword('');
//   }

//   return (
//     <div className='p-7  h-screen flex flex-col justify-between'>
//       <div>
//         <img className='w-14  mb-5' src="/images/uber-img.png" alt="uber-image" />
//         <form onSubmit={(e)=>{
//           submitHandler(e)
//         } } >
//           <h3 className='text-base font-medium mb-2'>What's your Name</h3>
//           <div className='flex gap-4 mb-5'>
//             <input
//               value={firstName}
//               onChange={(e)=>{
//                 setFirstName(e.target.value)
//               }}
//               className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Firstname' />
//             <input
//               value={lastName}
//               onChange={(e)=>{
//                 setLastName(e.target.value)
//               }}
//               className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Lastname' />
//           </div>

//           <h3 className='text-base font-medium mb-2'>What's your email</h3>
//           <input
//             value={email}
//             onChange={(e)=>{
//               setEmail(e.target.value)
//             }}
//             className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-5 placeholder:text-sm ' required type="email" placeholder='email@youremail.com' />

//           <h3 className='text-base font-medium mb-2'>Enter Password</h3>
//           <input
//           value={password}
//           onChange={(e)=>{
//             setPassword(e.target.value)
//           }}
//             className='bg-[#eeeeee] rounded px-4 py-2 border w-full mb-7 text-lg placeholder:text-sm ' required type="password" placeholder='enter your password' />

//           <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-sm placeholder:text-base ' >SignUp</button>
//           <div className='flex w-full justify-center'>
//             <p className='text-center'>Already have account ?   </p>
//             <Link to='/login' className='text-blue-600'> Sign-In</Link>
//           </div>
//         </form>

//       </div>
//       <div>
//         <p className='text-[12px] leading-tight '> By processing, you consent to get calls, WhatsApp or SMS messages, including by automated bmeans, from Uber and its affiliates to the number provided. </p>
//       </div>
//     </div>
//   )
// }

// export default UserSignup

