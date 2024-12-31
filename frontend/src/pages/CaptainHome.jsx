import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import 'remixicon/fonts/remixicon.css'
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
      <div className='h-screen'>

        <div className='fixed flex items-center justify-between w-screen top-0 p-3 '>

          <img className='w-16 ' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="" />

          <Link to='/captain-home' className='h-15 w-10 bg-[#eee] flex items-center justify-center rounded-full'> <i className='text-2xl font-medium ri-logout-box-r-line'></i></Link>

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
