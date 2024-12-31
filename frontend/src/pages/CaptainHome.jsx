import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },
    [ridePopupPanel]
  )

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to( confirmRidePopupPanelRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to( confirmRidePopupPanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },
    [confirmRidePopupPanel]
  )

  return (
    <>
      {/* <div className='h-screen'>

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
      </div> */}

      <div className='h-screen'>

        <div className='fixed flex items-center justify-between w-screen top-0 p-3 '>

          <img className='w-16 ' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="" />

          <Link to='/home' className='h-15 w-10 bg-[#eee] flex items-center justify-center rounded-full'> <i className='text-2xl font-medium ri-logout-box-r-line'></i></Link>

        </div>

        <div className='h-3/5  '>
          <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />
        </div>

        <div className='h-2/5  p-4 '>
          <CaptainDetails />
        </div>

        <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <RidePopUp 
              setRidePopupPanel={setRidePopupPanel}
              setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>

        <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <ConfirmRidePopUp   
              setRidePopupPanel={setRidePopupPanel}
              setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>


      </div>
    </>
  )
}

export default CaptainHome
