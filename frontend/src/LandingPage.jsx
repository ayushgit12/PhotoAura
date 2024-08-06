import React, { useEffect } from 'react'
import img from './assets/dog.jpg'
import magglass from './assets/magglass.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
import './index.css'
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LuScanFace } from "react-icons/lu";

const LandingPage = () => {

     const navigate = useNavigate();

     useEffect(() => {
          AOS.init();
     }
      ,[])

  return (
     <>
     <div className='bg-[#FBFFF4]'>
       <div className='bg-cyan-400 h-20'>
        <p className='font-semibold text-3xl flex items-center gap-2 h-full ml-6'><LuScanFace size={30} /> PhotoAura</p>
       </div>
     <div className='flex justify-between mx-4 mt-4 flex-wrap'>
       <div>
         <p data-aos='fade-right' className='text-9xl my-6 font-bold'>See,</p>
         <p data-aos-delay='800' data-aos='fade-right' className='text-9xl my-6 font-bold'>Know,</p>
         <p data-aos-delay='1600' data-aos='fade-right' className='text-9xl my-6 font-bold'>Learn !</p>
         <p className='text-2xl'>See the world differently: </p>
         <p className='text-2xl mt-2 md:mb-0 mb-6'><span className='underline flex items-center gap-2 text-3xl'><LuScanFace />PhotoAura</span> your visual search companion!</p>
         </div>
       <div className='relative md:mx-0 mx-auto'>
         <img src={img} className='h-[650px] rounded-xl' alt="" /> 
         <img className='absolute top-16 h-32 left-32' src={magglass} alt="" />
         <p className='absolute text-xl rounded-2xl py-1 text-center bg-gray-100 w-48 md:top-20 top-4 pl-4 md:right-64 right-1/2 flex items-center gap-4 border-black border'><FaMagnifyingGlass size={18} /><TypeAnimation 
         sequence={
               [
                    1000,
                    '...',
                    1000,
                    'Dog',
               2000,
               'Husky',
               2000,
               'Husky 🐶'
               ]
         }
         /></p>
         
         </div>
         </div>
 <div className='text-center py-4'>
         <button onClick={()=>navigate('/mainpage')} className='bg-cyan-400 px-5 py-3 text-2xl rounded-xl text-center'>Go to App</button>
         </div>
         </div>
 
     </>
  )
}

export default LandingPage
