import React from 'react'

const VehiclePanel = (props) => {



  return (
    <div>
              <h5 onClick={
          ()=>{
            props.setVehiclePanelOpen(false)
          }
        } className='p-1 text-center absolute top-0 w-[93%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Select Your Ride</h3>



        <div onClick={
            ()=>{
                props.setConfirmRidePanel(true)
            }
        } className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/car-logo.png" alt="car" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base '>CarRide <span> <i className='ri-user-3-fill'>2</i> </span> </h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹192.20</h2>
        </div>


        <div onClick={
            ()=>{
                props.setConfirmRidePanel(true)
            }
        } className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/bike-img.png" alt="car" />
          <div className='w-1/2 ml-[-1]'>
            <h4 className='font-medium text-base '>BikeRide <span> <i className='ri-user-3-fill'>10</i> </span> </h4>
            <h5 className='font-medium text-sm'>5 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹82.20</h2>
        </div>


        <div onClick={
            ()=>{
                props.setConfirmRidePanel(true)
            }
        } className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/auto-logo.png" alt="car" />
          <div className='w-1/2 ml-6'>
            <h4 className='font-medium text-base '>AdventureRide <span> <i className='ri-user-3-fill'>2</i> </span> </h4>
            <h5 className='font-medium text-sm'>8 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹442.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
