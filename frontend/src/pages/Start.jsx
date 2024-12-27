import React from 'react'
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className='bg-top bg-cover bg-[url(/images/bg-cover.jpg)] h-screen pt-8  w-full flex justify-between flex-col bg-red-400 '>
      <img className='w-14 ml-8' src="/images/uber-img.png" alt="uber-image" />
        <div className='bg-white pb-7 py-4 px-4 '>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-6'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
