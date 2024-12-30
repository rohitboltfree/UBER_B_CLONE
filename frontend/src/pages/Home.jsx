import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <img className='w-36 h-26 absolute left-5 top-5' src="https://i.pinimg.com/originals/4b/f3/18/4bf318204a3fea25898a348bc531fef5.png" alt="uber-logo" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpHww-0751LS8YUTno8Tj_dQfQDJopp_H4w&s" alt="temporary image" />
      </div>
       
       <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] '>
          <h4>Find a trip</h4>
        </div>
       </div>

    </div>
  )
}

export default Home
