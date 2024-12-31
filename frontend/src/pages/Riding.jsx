import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>

    <Link to='/home' className=' fixed  right-2 top-2 h-15 w-10 bg-[#eee] flex items-center justify-center rounded-full'> <i className='text-2xl font-medium ri-home-5-line'></i></Link>

      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />

      <div className='h-1/2 p-4 '>

      <div className='flex items-center justify-between '>
        <img className='h-12 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right '>
          <h2 className='text-lg font-medium '>Aman</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1 '>MP04 AB 1476</h4>
          <p className='text-sm text-gray-600'>Maruti Pro</p>
        </div>
      </div>

      <div className='flex gap-3 justify-between flex-col items-center'>
        <img className='h-20 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

        <div className='w-full mt-5 '>

          <div className='flex items-center gap-6 p-3 border-b-2  '>
            <i className='text-lg ri-map-pin-user-fill'></i>
            <div className=''>
              <h3 className='text-lg font-medium'>562/11/A</h3>
              <p className='text-sm -mt-1  text-gray-600 '>Road Rajpur, Dehradun</p>
            </div>
          </div>


          <div className='flex items-center gap-6 p-3 border-b-2  '>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div className=''>
              <h3 className='text-lg font-medium'>562/11/A</h3>
              <p className='text-sm -mt-1  text-gray-600 '>Road Dehradun</p>
            </div>
          </div>


          <div className='flex items-center gap-6 p-3  '>
            <i className='text-lg ri-currency-line'></i>
            <div className=''>
              <h3 className='text-lg font-medium'>193.20</h3>
              <p className='text-sm -mt-1  text-gray-600 '>Cash Cash</p>
            </div>
          </div>


        </div>

      </div>

        <button className='w-full mt-5 text-white bg-[#80ef80] font-semibold p-2 rounded-lg '> Make a Payment</button>
      </div>

      </div>
    </div>
  )
} 

export default Riding
