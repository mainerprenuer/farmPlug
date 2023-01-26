import React from 'react';
import {BsCart4} from 'react-icons/bs';
import { motion } from 'framer-motion';

import Logo from './img/logo-.jpg';
import Avatar from './img/avatar.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>

        {/* DESKTOP & TABLET */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className="w-10 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Farm Plug</p>
        </Link>
              
        <div className='flex items-center gap-8'>
         <ul className="flex items-center gap-8">
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                 Menu
             </li>
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                 About
             </li>
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                 Services
              </li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                  Home
               </li>
          </ul>

        <div className='relative flex items-center justify-center'>
        <BsCart4 className='text-textColor text-2x1 cursor-pointer' />
        <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>3</p>
              
                 </div>
             </div>

             <motion.img whileTap={{ scale: 0.6}} src={Avatar} className="w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-x1 cursor-pointer" />
            </div>
        </div>


        {/* MOBILE */}
        <div className='flex md:hidden w-full h-full'></div>

    </header>
  )
};

export default Header