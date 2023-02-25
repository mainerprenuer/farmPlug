import React from 'react';
import { BsCart4 } from 'react-icons/bs'
import { motion } from 'framer-motion'

const RowContainer = ({ flag, data }) => {
  console.log(data);
  return (
    <div className={`w-full flex items-center gap-3 my-12 ${ flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap" }`}>
      {data && data.map((item) => (
         <div key={item.id} className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg '>
         <div className='w-full flex items-center justify-between'>
           <motion.img whileHover={{scale : 1.2 }} 
             src="https://firebasestorage.googleapis.com/v0/b/farmplug-ng.appspot.com/o/Images%2F1676134417952-pngwing.com%20(4).png?alt=media&token=a065dcf6-de7c-4be6-a411-e867651ade70" alt='' className='w-40 -mt-8 drop-shadow-2xl' />
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
 
             {/* add rating || others */}
 
           </div>
         </div>
       </div>
      ))}
    </div>
  )
}

export default RowContainer