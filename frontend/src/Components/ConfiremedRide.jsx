import React from 'react'
import { instance } from '../lib/axios';

const ConfiremedRide = (props) => {
    return (
        <div>
            <h5  onClick={
                () => {
                    props.setConfirmRidePanel(false)
                }
            } className='p-1 text-center absolute top-0 w-[93%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

            <div className='flex gap-3 justify-between flex-col items-center'>
                <img className='h-20 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />

                <div className='w-full mt-5 '>

                    <div className='flex items-center gap-6 p-3 border-b-2  '>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'>562/11/A</h3>
                            <p className='text-sm -mt-1  text-gray-600 '>{props.pickup}</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-6 p-3 border-b-2  '>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'>562/11/A</h3>
                            <p className='text-sm -mt-1  text-gray-600 '>{props.destination}</p>
                        </div>
                    </div>


                    <div className='flex items-center gap-6 p-3  '>
                        <i className='text-lg ri-currency-line'></i>
                        <div className=''>
                            <h3 className='text-lg font-medium'> ₹{props.fare[props.vehicleType]} </h3>
                            <p className='text-sm -mt-1  text-gray-600 '>Cash Cash</p>
                        </div>
                    </div>


                </div>

                <button onClick={
                    ()=>{
                       
                       props.setVehicleFound(true) 
                       props.setConfirmRidePanel(false)
                       props.createRide( )
                    }
                } className='w-full mt-5 text-white bg-[#80ef80] font-semibold p-2 rounded-lg '>Confirm</button>

            </div>
        </div>
    )
}

export default ConfiremedRide
