import React, { useState } from 'react'

const CaptainDetails = () => {

    

  return (
    <div>
      <div className='flex items-center justify-between'>

<div className='flex items-center justify-start gap-3'>
    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL2jLGYvgEjTNYW3DljsPgYgY-26gp45-mKcCEkVA8os51gPXSp28m2DkrRPC7KOAPDY&usqp=CAU" alt="" />
    <h4 className='text-lg font-medium '>Harsh Patel </h4>
</div>

<div >
  <h4 className='text-xl font-semibold'>rs 399.20</h4>
  <p className='text-sm text-gray-600'>Earned</p>
</div>

</div>

<div className='flex p-3 mt-6 bg-gray-100 rounded-xl  justify-between gap-5 items-start'>

<div className='text-center '>
<i className='text-3xl mb-2  font-thin ri-timer-2-line'></i>
<h5 className='text-lg font '>10.2</h5>
<p className='text-sm text-gray-600'>Pickup</p>
</div>

<div  className='text-center '>
<i className='text-3xl mb-2  font-thin ri-speed-up-line'></i>
<h5 className='text-lg font '>10.2</h5>
<p className='text-sm text-gray-600'>Destination</p>

</div>

<div  className='text-center '> 
<i className='text-3xl mb-2  font-thin ri-booklet-line'></i>
<h5 className='text-lg font '>10.2</h5>
<p className='text-sm text-gray-600'>Amount</p>

</div>
</div>
    </div>
  )
}

export default CaptainDetails
