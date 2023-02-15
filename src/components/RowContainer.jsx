import React from 'react';
import { BsCart4 } from 'react-icons/bs';

const RowContainer = ({ flag }) => {
  return (
    <div className={`w-full ${ flag ? "overflow-x-scroll" : "overflow-x-hidden" }`}>
      <div className='w-300 md:w-225 h-auto my-12 shadow-md backdrop-blur-lg'>
        <div className='w-full flex items-center justify-between'>
          <img src='https://firebasestorage.googleapis.com/v0/b/farmplug-ng.appspot.com/o/Images%2F1676134490546-pngwing.com%20(2).png?
            alt=media&token=cb313bad-5320-41da-92ce-f46b01e4d0e7' alt='' className='w-40 -mt-8' />
          <div className='w-8 h-8 rounded-full bg-red-600'>
              <BsCart4 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowContainer