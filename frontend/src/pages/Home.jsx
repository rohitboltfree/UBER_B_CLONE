import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import LocationSearchPanel from '../Components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: '70%',
          padding: '24'
        })
        gsap.to(panelCloseRef.current, {
          opacity: 1
        })
      } else {
        gsap.to(panelRef.current, {
          height: '0%',
          padding: '0'
        })
        gsap.to(panelCloseRef.current, {
          opacity: 0
        })
      }
    },
    [panelOpen]
  )

  useGSAP(
    function(){
     if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
     }else{
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
     }
    },
    [vehiclePanelOpen]
  )

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <img className='w-36 h-26 absolute left-5 top-5' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="uber-logo" />
      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative '>
          <div className='line absolute h-16 w-1 top-[45%] left-8 bg-gray-800 rounded-2xl'></div>
          <h3
            ref={panelCloseRef}
            onClick={
              () => {
                setPanelOpen(false)
              }
            }
            className='opacity-0 top-6 right-6 text-2xl absolute'>
            <i className='ri-arrow-down-wide-line'></i>
          </h3>
          <h4 className='text-2xl font-semibold' >Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <input
              required
              value={pickup}
              onClick={
                () => {
                  setPanelOpen(true)
                }
              }
              onChange={
                (e) => {
                  setPickup(e.target.value);
                }
              }
              type="text"
              className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-5'
              placeholder='Add a pick-up location' />


            <input
              required
              value={destination}
              onClick={
                () => {
                  setPanelOpen(true)
                }
              }
              onChange={
                (e) => {
                  setDestination(e.target.value)
                }
              }
              type="text"
              className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-3'
              placeholder='Enter your destination' />

          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel 
           setVehiclePanelOpen={setVehiclePanelOpen}
           setPanelOpen={setPanelOpen} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-14 bg-white'>
        <h5 onClick={
          ()=>{
            setVehiclePanelOpen(false)
          }
        } className='p-1 text-center absolute top-0 w-[93%] '><i className='ri-arrow-down-wide-line text-3xl  text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Select Your Ride</h3>


        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/car-logo.png" alt="car" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base '>CarRide <span> <i className='ri-user-3-fill'>2</i> </span> </h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹192.20</h2>
        </div>


        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/bike-img.png" alt="car" />
          <div className='w-1/2 ml-[-1]'>
            <h4 className='font-medium text-base '>BikeRide <span> <i className='ri-user-3-fill'>10</i> </span> </h4>
            <h5 className='font-medium text-sm'>5 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹82.20</h2>
        </div>


        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl p-3 bg-[#eee] justify-center items-center'>
          <img className='h-[58px] ' src="images/auto-logo.png" alt="car" />
          <div className='w-1/2 ml-6'>
            <h4 className='font-medium text-base '>AdventureRide <span> <i className='ri-user-3-fill'>2</i> </span> </h4>
            <h5 className='font-medium text-sm'>8 min away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹442.20</h2>
        </div>
      </div>

    </div>
  )
}

export default Home
