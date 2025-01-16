import { useGSAP } from '@gsap/react';
// import axios from 'axios';
import gsap from 'gsap';
import React, { useContext, useEffect, useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import ConfiremedRide from '../Components/ConfiremedRide';
import LocationSearchPanel from '../Components/LocationSearchPanel';
import LookingForDrive from '../Components/LookingForDrive';
import VehiclePanel from '../Components/VehiclePanel';
import WaitingForDriver from '../Components/WaitingForDriver';
import { SocketContext } from '../context/SocketProvider';
import { UserDataContext } from '../context/UserContext';
import { instance } from '../lib/axios';
import { useDebounce } from '../hooks/useDebounce';



const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [VehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);

const {socket} = useContext(SocketContext);
const {user} = useContext(UserDataContext);

useEffect(() => {
  if (user && user._id) {
    console.log(`Emitting join event with userId: ${user._id} and userType: user`,socket);
    if (socket) {
      socket.emit('join', { userType: 'user', userId: user._id });
    }
  } else {
    console.log('User is not defined yet.');
  }
}, [user, socket]);


 async function findTrip(){
     setVehiclePanelOpen(true);
        setPanelOpen(false);

        const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
             params:{
              pickup, destination
             },
        }
      )
      setFare(response.data)
      // console.log("fare data to select ride ", response.data)
  }

  async function createRide() {
    try {
        const response = await instance.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        });
        return response;
    } catch (error) {
        console.error('Error creating ride:', error);
        return error;
    }
}

  const pickupLocation = useDebounce(pickup,700)
  const destinationLocation = useDebounce(destination,700)

  useEffect(()=>{
    (async()=>{
      try {
        const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/maps/get-place-suggestions`, {
          params: { input: pickupLocation },
        });
        setPickupSuggestions(response.data);
      } catch (error) {
        console.error(error);
      }
    })()
  },[pickupLocation])



  useEffect(()=>{
    (async()=>{
      try {
        const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/maps/get-place-suggestions`, {
          params: { input: destinationLocation },
        });
        setDestinationSuggestions(response.data);
      } catch (error) {
        console.error(error);
      }
    })()
  },[destinationLocation])



  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
   
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };


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
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[35%] p-5 bg-white relative '>
          <div className='line absolute h-16 w-1 top-[40%] left-8 bg-gray-800 rounded-2xl'></div>
          <h3
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='opacity-0 top-6 right-6 text-2xl absolute'>
            <i className='ri-arrow-down-wide-line'></i>
          </h3>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <input
              required
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup');
              }}
              onChange={handlePickupChange}
              type="text"
              className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-5'
              placeholder='Add a pick-up location' />

            <input
              required
              value={destination}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('destination');
              }}
              onChange={handleDestinationChange}
              type="text"
              className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-3'
              placeholder='Enter your destination' />
          </form>

          <button 
          onClick={
            
            findTrip
          }
           className='mt-2 text-white w-full bg-[#80ef80] font-semibold p-2 px-10 rounded-lg '>Find Trip</button>

        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel 
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions} 
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPanelOpen={setPanelOpen} 
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <VehiclePanel 
          fare={fare}
          selectVehicle={setVehicleType}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel} />
      </div>
      
      <div ref={confirmRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfiremedRide
          fare={fare}
          pickup={pickup}
          vehicleType={vehicleType}
          createRide={createRide} 
          destination={destination}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-10 bg-white'>
        <LookingForDrive
         fare={fare}
         pickup={pickup}
         vehicleType={vehicleType}
         createRide={createRide} 
         destination={destination}
         setConfirmRidePanel={setConfirmRidePanel}
         setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
}

export default Home;



// import React, { useRef, useState } from 'react'
// import 'remixicon/fonts/remixicon.css'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap';
// import axios from 'axios'
// import LocationSearchPanel from '../Components/LocationSearchPanel';
// import VehiclePanel from '../Components/VehiclePanel';
// import ConfiremedRide from '../Components/ConfiremedRide';
// import LookingForDrive from '../Components/LookingForDrive';
// import WaitingForDriver from '../Components/WaitingForDriver';

// const Home = () => {

//   const [pickup, setPickup] = useState('');
//   const [destination, setDestination] = useState('')
//   const [panelOpen, setPanelOpen] = useState(false)
//   const panelRef = useRef(null)
//   const panelCloseRef = useRef(null)
//   const vehiclePanelRef = useRef(null)
//   const confirmRidePanelRef = useRef(null)
//   const vehicleFoundRef = useRef(null)
//   const waitingForDriverRef = useRef(null)
//   const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false)
//   const [confirmRidePanel, setConfirmRidePanel] = useState(false)
//   const [VehicleFound, setVehicleFound] = useState(false)
//   const [waitingForDriver, setWaitingForDriver] = useState(false)
//   const [pickupSuggestions, setPickupSuggestions ]= useState([])
//   const [destinationSuggestions, setDestinationSuggestions ] = useState([])
//   const [ activeField, setActiveField ] = useState(null)

//   const handlePickupChange = async (e) => {
//     setPickup(e.target.value)
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-place-suggestions`, {
//         params:{input:e.target.value},
//         headers: { 
//           Authorization: ` Bearer ${localStorage.getItem('token')} `
//         }
//       })
//       setPickupSuggestions(response.data)
//     } catch (error) {
      
//     }
//   }

//   const handleDestinationChange = async (e) => {
//     setDestination(e.target.value)
//     try {
//       const response = await axios.get(`${meta.env.VITE_BASE_URL}/maps/get-place-suggestion`, {
//         params : {
//           input: e.target.value
//         },
//         headers:{
//           Authorization: ` Bearer ${localStorage.getItem('token')}`
//         }
//       })
//       setDestinationSuggestions(response.data)
//     } catch (error) {
      
//     }
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//   }

//   useGSAP(
//     function () {
//       if (panelOpen) {
//         gsap.to(panelRef.current, {
//           height: '70%',
//           padding: '24'
//         })
//         gsap.to(panelCloseRef.current, {
//           opacity: 1
//         })
//       } else {
//         gsap.to(panelRef.current, {
//           height: '0%',
//           padding: '0'
//         })
//         gsap.to(panelCloseRef.current, {
//           opacity: 0
//         })
//       }
//     },
//     [panelOpen]
//   )

//   useGSAP(
//     function(){
//      if(vehiclePanelOpen){
//       gsap.to(vehiclePanelRef.current, {
//         transform:'translateY(0)'
//       })
//      }else{
//       gsap.to(vehiclePanelRef.current, {
//         transform:'translateY(100%)'
//       })
//      }
//     },
//     [vehiclePanelOpen]
//   )

//   useGSAP(
//     function(){
//      if(confirmRidePanel){
//       gsap.to(confirmRidePanelRef.current, {
//         transform:'translateY(0)'
//       })
//      }else{
//       gsap.to(confirmRidePanelRef.current, {
//         transform:'translateY(100%)'
//       })
//      }
//     },
//     [confirmRidePanel]
//   )

//   useGSAP(
//     function(){
//      if(VehicleFound){
//       gsap.to(vehicleFoundRef.current, {
//         transform:'translateY(0)'
//       })
//      }else{
//       gsap.to(vehicleFoundRef.current, {
//         transform:'translateY(100%)'
//       })
//      }
//     },
//     [VehicleFound]
//   )

//   useGSAP(
//     function(){
//      if(waitingForDriver){
//       gsap.to(waitingForDriverRef.current, {
//         transform:'translateY(0)'
//       })
//      }else{
//       gsap.to(waitingForDriverRef.current, {
//         transform:'translateY(100%)'
//       })
//      }
//     },
//     [waitingForDriver]
//   )

//   return (
//     <div className='h-screen w-screen overflow-hidden'>
//       <img className='w-36 h-26 absolute left-5 top-5' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="uber-logo" />
//       <div  className='h-screen w-screen'>
//         <img className='h-full w-full object-cover' src="images/map.jpg" alt="temporary image" />
//       </div>

//       <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
//         <div className='h-[30%] p-5 bg-white relative '>
//           <div className='line absolute h-16 w-1 top-[45%] left-8 bg-gray-800 rounded-2xl'></div>
//           <h3
//             ref={panelCloseRef}
//             onClick={
//               () => {
//                 setPanelOpen(false)
//               }
//             }
//             className='opacity-0 top-6 right-6 text-2xl absolute'>
//             <i className='ri-arrow-down-wide-line'></i>
//           </h3>
//           <h4 className='text-2xl font-semibold' >Find a trip</h4>
//           <form onSubmit={(e) => {
//             submitHandler(e)
//           }}>
//             <input
//               required
//               value={pickup}
//               onClick={
//                 () => {
//                   setPanelOpen(true)
//                   setActiveField('pickup')
//                 }
//               }
//               onChange={
//                 (e) => {
//                   handlePickupChange
//                 }
//               }
//               type="text"
//               className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-5'
//               placeholder='Add a pick-up location' />


//             <input
//               required
//               value={destination}
//               onClick={
//                 () => {
//                   setPanelOpen(true)
//                   setActiveField('destination')
//                 }
//               }
//               onChange={
//                 handleDestinationChange
//               }
//               type="text"
//               className='bg-[#eee] px-8 py-2 text-lg rounded-md placeholder:text-base w-full mt-3'
//               placeholder='Enter your destination' />

//           </form>
//         </div>
//         <div ref={panelRef} className='bg-white h-0'>
//           <LocationSearchPanel 
//             suggestions = {activeField === 'pickup' ? pickupSuggestions : destinationSuggestions } 
//            setVehiclePanelOpen={setVehiclePanelOpen}
//            setPanelOpen={setPanelOpen} 
//            setPickup={setPickup}
//            setDestination = {setDestination}
//            activeField = {activeField}

//           />
//         </div>
//       </div>

//       <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
//                 <VehiclePanel 
//                 setVehiclePanelOpen={setVehiclePanelOpen}
//                 setConfirmRidePanel={setConfirmRidePanel} />
//       </div>
      
//       <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
//                 <ConfiremedRide 
//                 setConfirmRidePanel={setConfirmRidePanel}
//                 setVehicleFound={setVehicleFound}  />
//       </div>

//       <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
//                 <LookingForDrive setVehicleFound={setVehicleFound} />
//       </div>

//       <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
//                 <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
//       </div>


//     </div>
//   )
// }

// export default Home
