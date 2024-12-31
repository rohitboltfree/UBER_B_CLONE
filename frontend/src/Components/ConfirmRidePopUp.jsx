import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const ConfirmRidePopUp = (props) => {
    return (
        <div >
            <h5 onClick={
                () => {
                    props.setRidePopupPanel(false)
                }
            } className='p-1 text-center absolute top-0 w-[93%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

            <div className='flex gap-3 justify-between flex-col items-center '>



                <div className='flex items-center justify-between  bg-yellow-300 rounded-lg w-full p-4 mt-2'>
                    <div className='flex items-center gap-3 '>
                        <img className='h-14 w-12  object-center rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_O_FmLwtxhqhCfThJBk3_aZR1Vl6r1NCGA&s" alt="" />
                        <h2 className='text-lg font-medium'>Rina</h2>
                    </div>
                    <h5 className='text-lg font-semibold '>4.4  KM</h5>
                </div>

                <div className='flex w-full gap-3 justify-between flex-col items-center'>

                    <div className='w-full mt-2 '>

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

                    <Link to='/captain-rinding' className='flex justify-center  w-full mt-5 text-white bg-[#80ef80] font-semibold p-3 rounded-lg '>Confirm</Link>

                    <button onClick={
                        () => {
                            
                            props.setRidePopupPanel(false)
                            props.setConfirmRidePopupPanel(false)
                        }
                    } className='w-full mt-2 text-white bg-red-400 font-semibold p-3 rounded-lg '>Cancel</button>

                </div>

            </div>
        </div>
    )
}

export default ConfirmRidePopUp
