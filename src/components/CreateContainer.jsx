import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BiFoodMenu } from 'react-icons/bi';
import { categories } from '../utils/data';
import Loader from './Loader';

const CreateContainer = () => {

  const [title, setTitle] = useState("");
  const [kilograms, setKilograms] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [imgAsset, setImageAsset] = useState("");
  const [fields, setfields] = useState(false);
  const [alertStatus, setStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center gap-4'>
         {
          fields && (
            <motion.p initial={{opacity : 0}}
                      animate={{opacity : 1}}
                      exit={{opacity : 0}}
             className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus == 'danger'
             ? 'bg-red-400 text-red-800' 
             : 'bg-emerald-400 text-emerald-800'}`}
             >{msg}
             </motion.p>
          )
         }

         <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <BiFoodMenu className='text-xl text-gray-700'/>
          <input type="text"
           required value={title} 
           onChange={(e) => setTitle(e.target.value)}
           placeholder="Give me a title..."
           className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text text-textColor'></input>
         </div>

         <div className='w-full'>
          <select onChange={(e) => setcategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
            <option value="other" className='bg-white'>Select Category</option>
            {categories && categories.map(item => (
              <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-headingColor"
              value={item.urlParamName}>
                {item.name}
              </option>
            ))}
          </select>
         </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
              {isLoading ? <Loader /> : <>
                  {!imgAsset ? <>
                    <label className='w-ful h-full '>

                    </label>
                  </> : <></>}
              </>}
        </div>
      </div>
    </div>
  );
};

export default CreateContainer