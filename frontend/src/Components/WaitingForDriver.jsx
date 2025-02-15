import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={
        () => {
          props.setWaitingForDriver(false)
        }
      } className='p-1 text-center absolute top-0 w-[93%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>
      {/* <h3 className='text-2xl font-semibold mb-5'>Waiting for a Driver</h3> */}

      <div className='flex items-center justify-between '>
        <img className='h-12 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right '>
          <h2 className='text-lg font-medium '>Aman</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1 '>MP04 AB 1476</h4>
          <p className='text-sm text-gray-600'>Maruti Pro</p>
        </div>
      </div>

      <div className='flex gap-3 justify-between flex-col items-center'>
        {/* <img className='h-20 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" /> */}

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
      
    </div>
  )
}

export default WaitingForDriver
