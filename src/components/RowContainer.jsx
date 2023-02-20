import React from 'react';
import { BsCart4 } from 'react-icons/bs'
import { motion } from 'framer-motion'

const RowContainer = ({ flag }) => {
  return (
    <div className={`w-full my-12 bg-orange-100 ${ flag ? "overflow-x-scroll" : "overflow-x-hidden" }`}>
      <div className='w-300 md:w-340 h-auto bg-gray-100 rounded-lg p-2 my-12 shadow-md backdrop-blur-lg hover:drop-shadow-lg '>
        <div className='w-full flex items-center justify-between'>
          <motion.img whileHover={{scale : 1.2 }} 
            src="https://firebasestorage.googleapis.com/v0/b/farmplug-ng.appspot.com/o/Images%2F1676133860245-mongo.jpg?alt=media&token=c053ca9c-1fbb-42d3-aebb-68351e23f7b7" alt='' className='w-40 -mt-8' />
          <motion.div whileTap={{scale : 0.75 }} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
              <BsCart4 className='text-white'/>
          </motion.div>
        </div>
        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold text-base  md:text-lg'>Mango</p>
          <p className='mt-1 text-sm text-gray-500'>2 Kilograms</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'>
              <span className='text-sm text-red-500'>₦</span> 1000
            </p>

            {/* add rating */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default RowContainer