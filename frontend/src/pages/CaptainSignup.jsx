import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { instance } from '../lib/axios';

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();

   const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        capacity: vehicleCapacity,
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType
      }
    }

    const response = await instance.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)


    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
  }


  return (
    <div className='p-5  h-screen flex flex-col justify-between'>
      <div>
        <img className='w-14  mb-5' src="https://pngimg.com/d/uber_PNG24.png " alt="uber-image" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }} >
          <h3 className='text-base font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Firstname' />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-sm placeholder:text-sm ' required type="text" placeholder='Lastname' />
          </div>

          <h3 className='text-base font-medium mb-2 '>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
            />
            <input
              required
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              type="text"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-sm placeholder:text-sm'
            >
              <option value="" disabled>Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm mb-5 placeholder:text-sm ' required type="email" placeholder='email@youremail.com' />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
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
        <p className='text-[12px] leading-tight mt-4 '> This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span> and <span className='underline'>Terms of Service apply</span>. </p>
      </div>
    </div>
  )
}

export default CaptainSignup
