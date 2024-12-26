import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='h-screen pt-8  w-full flex justify-between flex-col bg-red-400 '>
      <img className='w-14 ml-8' src="/images/uber-img.png" alt="uber-image" />
        <div className='bg-white pb-7 py-4 px-4 '>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <button className='w-full bg-black text-white py-3 rounded mt-6'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Home
