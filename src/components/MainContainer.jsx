import React from 'react'
import Delivery from '../img/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex-1 flex flex-col items-start justify-start gap-6'>
        <div className='flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full'>
          <p className='text-base text-green-600 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-x1'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

      <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
      The Fastest Delivery in <span className='text-green-600 text-[3rem]'>Your City</span>
      </p>

      <p className='text-base text-textColor text-center md:text-left'>
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      Learning is a recursive function,Learning is a recursive function
      </p>

      <button 
      type='button' className='bg-gradient-to-br from-green-400 to-green-500 w-full px-4 py-2 rounded-lg
      hover:shadow-lg transition-all ease-out duration-100'>
      Order Now</button>
      </div>
      <div className='py-2 bg-blue-400 flex-1'></div>
    </div>
  )
}

export default MainContainer
