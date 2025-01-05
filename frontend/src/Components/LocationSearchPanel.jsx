import React from 'react';

const LocationSearchPanel = ({ suggestions, setPanelOpen, setVehiclePanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description);
        } else if (activeField === 'destination') {
            setDestination(suggestion.description);
        }
        
    };

    return (
        <div>
            {suggestions.map((suggestion, idx) => (
                <div key={idx} onClick={() => handleSuggestionClick(suggestion)} className='flex gap-4 border-2 p-3 rounded-xl active:border-gray-50 my-2 items-center justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '>
                        <i className='ri-map-pin-fill '></i>
                    </h2>
                    <h4 className='font-medium'>{suggestion.description}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchPanel;




// import React from 'react'

// const LocationSearchPanel = ({ suggestions,setPanelOpen,setVehiclePanelOpen, setpickup, setDestination }) => {

//     const handleSuggestionClick = (suggestion) => {
//         if(activeField === ' pickup' ){
//             setpickup(suggestion)
//         }else if (activeField === 'destination'){
//             setDestination(suggestion)
//         }
//         // setVehiclePanelOpen(true)
//         // setPanelOpen(false) 
//     }

//     //sample array for location
//     const location = [
//         "24B, Jakhan, Rajpur road, Dehradun",
//         "4A, Canal road, Rajpur road, Dehradun"
//     ]

//     return (
//         <div>

//             {suggestions.map(function (elem,idx) {
//                 return (
//                     <div key={idx} onClick={()=>{
//                         handleSuggestionClick(elem)
//                         props.setVehiclePanelOpen(true)
//                         props.setPanelOpen(false)
//                     } } className='flex gap-4 border-2 p-3 rounded-xl active:border-gray-50   my-2 items-center justify-start'>
//                         <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '>
//                             <i className='ri-map-pin-fill '></i>
//                         </h2>
//                         <h4 className='font-medium'>{elem} </h4>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default LocationSearchPanel
