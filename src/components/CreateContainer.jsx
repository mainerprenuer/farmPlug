import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { BiFoodMenu } from 'react-icons/bi';
import { IoIosCloudUpload } from 'react-icons/io';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { GiWeight, GiTakeMyMoney } from 'react-icons/gi';

import { categories } from '../utils/data';
import Loader from './Loader';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';

const CreateContainer = () => {

  const [title, setTitle] = useState("");
  const [kilograms, setKilograms] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [imgAsset, setImageAsset] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true); 
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile) ;

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.Transferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setFields(true);
      setMsg('Error while uploading : Try Again 😣');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
   }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downlodURL => {
        setImageAsset(downlodURL);
        setIsLoading(false)
        setFields(true);
        setMsg('Image Uploaded Successfully 😄');
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false);
        }, 4000);
     })
   })
  };

  const deleteImage = () => {};

  const saveDetails = () => {};

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
           className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text text-textColor'></input>
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
              {isLoading ? (
                <Loader /> 
                ) : ( 
                <>
                  {!imgAsset ? (
                   <>
                    <label className='w-ful h-full flex flex-col items-center justify-center cursor-pointer'>
                      <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                        <IoIosCloudUpload className='text-gray-500 hover:text-gray-700'/>
                        <p className='text-gray-700'>Click here to upload</p>
                      </div>
                      <input type="file" name='uploadimage' accept="image/" onChange={uploadImage} className='w-0 h-0' />
                    </label> 
                  </>
                  ) : (
                  <><div className='relative h-full'>
                      <img src={imgAsset} alt="uploadimage" className='w-full h-full object-cover' />
                      <button type='button' className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl 
                       cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" 
                       onClick={deleteImage}><RiDeleteBin4Fill className='text-white' />
                      </button>
                    </div></>
                  )}
              </>
              )}
        </div>

        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <GiWeight className='text-gray-700 text-2x1' />
            <input type='text' required value={kilograms} onChange={(e) => setKilograms(e.target.value)}
             placeholder='kilograms' className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <GiTakeMyMoney className='text-gray-700 text-2x1' />
            <input type='text' required value={price} onChange={(e) => setprice(e.target.value)} placeholder='price' className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
          </div>
        </div>
        <div className='flex items-center w-full'>
          <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-white font-semi-bold' onClick={saveDetails}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer