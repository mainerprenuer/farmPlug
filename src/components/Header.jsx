import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { MdAdd, MdLogout}  from 'react-icons/md';
import { motion } from 'framer-motion';
// import CartContainer from './CartContainer';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from '../img/logo-.jpg';
import Avatar from '../img/avatar.png'
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { clear } from '@testing-library/user-event/dist/clear';
import { type } from '@testing-library/user-event/dist/type';

const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user, cartShow }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
        if(!user) {
            const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type : actionType.SET_USER,
            user : providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        });
    };  

    const showCart = () => {
        dispatch({ 
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow, 
                });
    }; 

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-3 md:px-16 bg-primary'>

        {/* DESKTOP & TABLET */}
        <div className='hidden md:flex w-full h-full rounded-full items-center justify-between'>
        <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className="w-10 object-cover rounded-full" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Farm Plug</p>
        </Link>
              
        <div className='flex items-center gap-8'>
         <motion.ul initial={{opacity : 0, x : 200}}
                    animate={{opacity : 1, x : 0}}
                    exit={{opacity : 0, x : 200}} 
               className="flex items-center gap-8">
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
          </motion.ul>

        <div className='relative flex items-center justify-center' onClick={showCart}>
        <BsCart4 className='text-textColor text-2x1 cursor-pointer' />
        <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>3</p>
          </div>
        </div>

        <div className="relative">
          <motion.img 
            whileTap={{ scale: 0.6}}
            src={user ? user.photoURL : Avatar} 
            className="w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-x1 cursor-pointer rounded-full"
            alt='userprofile'
            onClick={login}
            />
            {
                isMenu && (
                    <motion.div initial={{opacity : 0, scale : 0.6}}
                                animate={{opacity : 1, scale : 1}}
                                exit={{opacity : 0, scale : 0.6}}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0">
                { user && user.email === "moustymainer@gmail.com" && (
                        <Link to={"/createItem"}>
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 
                        transition-all duration-100 ease-in-out text-textColor text-base"
                        onClick={() => setIsMenu(false)}
                        >New Item <MdAdd />
                        </p>
                        </Link>
                    )
                }
                <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-gray-200 
                transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
                >Logout <MdLogout /></p>
            </motion.div>
                )
            }
          </div>
        </div>
      </div>
             

    {/* MOBILE */}
    <div className='flex items-center justify-between md:hidden w-full h-full rounded-full'>

        <div className='relative flex items-center justify-center' onClick={showCart}>
        <BsCart4 className='text-textColor text-2x1 cursor-pointer' />
        <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>3</p>
          </div>
        </div>

        <Link to={"/"} className='flex items-center gap-2'>
            <img src={Logo} className="w-10 object-cover rounded-full" alt="logo" />
            <p className="text-headingColor text-xl font-bold"> Farm Plug</p>
        </Link>

        <div className="relative">
          <motion.img 
            whileTap={{ scale: 0.6}}
            src={user ? user.photoURL : Avatar} 
            className="w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-x1 cursor-pointer rounded-full"
            alt='userprofile'
            onClick={login}
            />
            {
                isMenu && (
                    <motion.div initial={{opacity : 0, scale : 0.6}}
                                animate={{opacity : 1, scale : 1}}
                                exit={{opacity : 0, scale : 0.6}}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0">
                { user && user.email === "moustymainer@gmail.com" && (
                        <Link to={"/createItem"}>
                        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                        transition-all duration-100 ease-in-out text-textColor text-base">New Item <MdAdd />
                        </p>
                        </Link>
                    )
                }

        <ul className="flex flex-col">
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
             onClick={() => setIsMenu(false)}>
                 Menu
             </li>
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
             onClick={() => setIsMenu(false)}>
                 About
             </li>
             <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
             onClick={() => setIsMenu(false)}>
                 Services
              </li>
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'
              onClick={() => setIsMenu(false)}>
                  Home
               </li>
          </ul>

                <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-gray-200 
                transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
                >Logout <MdLogout />
                </p>
            </motion.div>
                )
            }
          </div>
    </div>

    </header>
  )
};

export default Header