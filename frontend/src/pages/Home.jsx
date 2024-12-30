import React, { useRef, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import LocationSearchPanel from '../Components/LocationSearchPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfiremedRide from '../Components/ConfiremedRide';
import LookingForDrive from '../Components/LookingForDrive';
import WaitingForDriver from '../Components/WaitingForDriver';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [VehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

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

  useGSAP(
    function(){
     if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(0)'
      })
     }else{
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(100%)'
      })
     }
    },
    [confirmRidePanel]
  )

  useGSAP(
    function(){
     if(VehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0)'
      })
     }else{
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)'
      })
     }
    },
    [VehicleFound]
  )

  useGSAP(
    function(){
     if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0)'
      })
     }else{
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)'
      })
     }
    },
    [waitingForDriver]
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

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
                <VehiclePanel 
                setVehiclePanelOpen={setVehiclePanelOpen}
                setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
                <ConfiremedRide 
                setConfirmRidePanel={setConfirmRidePanel}
                setVehicleFound={setVehicleFound}  />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
                <LookingForDrive setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>


    </div>
  )
}

export default Home
