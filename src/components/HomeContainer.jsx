import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import F1 from "../img/f1.png"

// import { heroData } from '../utils/data'

const heroData = [
  {id : 1, name : 'Fresh Strawberries', desc : 'All sweet berries', price : '1,500', imageSrc : 'f1'},]

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-600 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-x1 shadow-lg bg-white'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

      <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
      The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
      </p>

      <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      Learning is a recursive function,Learning is a recursive function,Learning is a recursive function,
      </p>

      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg
      hover:shadow-lg transition-all ease-out duration-100'>
      Order Now</button> 
      </div>
    <div className='py-2 flex-1 flex items-center relative'>
            <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt='hero-Bg' />

            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>
                {heroData && heroData.map(n =>(
                    <div key={n.id} className='w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                    <img src={n.imageSrc} className='w-40 -mt-20' alt='f1' />
                    <p className='text-xl font-semibold text-textColor mt-4'>{n.name}</p>

                    <p className='text-md text-lighttextGray font-semibold my-3'>{n.desc}</p>

                    <p className='text-sm font-semibold text-headingColor'>
                    <span className='text-xs text-red-600'>₦</span>{n.price}</p>
                </div>
                ))}
            </div>
      </div>
    </section>
  ) ;
}

export default HomeContainer