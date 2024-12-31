import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import FinishRide from '../Components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = (props) => {

  const [finishRidePanel, setFinishRidePanel ]= useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(0)'
        })
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
    },
    [finishRidePanel]
  )

  return (
    <div className='h-screen relative'>
    
    <div className='fixed flex items-center justify-between w-screen top-0 p-3 '>

      <img className='w-16 ' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="" />

      <Link to='/captain-home' className='h-15 w-10 bg-[#eee] flex items-center justify-center rounded-full'> <i className='text-2xl font-medium ri-logout-box-r-line'></i></Link>

    </div>

    <div className='h-4/5  '>
      <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />
    </div>

    <div onClick={
                () => {
                    setFinishRidePanel(true)
                }
            }  className='h-1/5  p-6 flex relative items-center justify-between border-yellow-300 border-2  '>

    <h5 onClick={
                () => {
                    
                }
            } className='p-1 text-center absolute top-0 w-[95%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>

        <h4 className='text-lg font-semibold items-center  '> 4km away </h4>
        <button className='flex justify-center  w-[65%] mt-5 text-white bg-[#80ef80] font-semibold p-3 rounded-lg'> Complete Ride</button>
    </div>

    <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <FinishRide  
              setFinishRidePanel={setFinishRidePanel} />
        </div>


  </div>
  )
}

export default CaptainRiding
