import React from 'react'

const LocationSearchPanel = (props) => {



    //sample array for location
    const location = [
        "24B, Jakhan, Rajpur road, Dehradun",
        "4A, Canal road, Rajpur road, Dehradun"
    ]

    return (
        <div>

            {location.map(function (elem,idx) {
                return (
                    <div key={idx} onClick={()=>{
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    } } className='flex gap-4 border-2 p-3 rounded-xl active:border-gray-50   my-2 items-center justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '>
                            <i className='ri-map-pin-fill '></i>
                        </h2>
                        <h4 className='font-medium'>{elem} </h4>
                    </div>
                )
            })}

            {/* <div className='flex gap-4 border-2 p-3 rounded-xl active:border-gray-50   my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '>
                    <i className='ri-map-pin-fill '></i>
                </h2>
                <h4 className='font-medium'>24B, Jakhan, Rajpur road, Dehradun</h4>
            </div>
            <div className='flex gap-4 border-2 p-3 rounded-xl active:border-gray-50  my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full '>
                    <i className='ri-map-pin-fill '></i>
                </h2>
                <h4 className='font-medium'>4A, Canal road, Rajpur road, Dehradun</h4>
            </div> */}
        </div>
    )
}

export default LocationSearchPanel
