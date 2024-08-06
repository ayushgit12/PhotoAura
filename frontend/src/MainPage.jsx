import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const MainPage = () => {

     const [file, setFile] = useState();  
     const [result, setResult] = useState(""); 
     const navigate = useNavigate();

     const handleDetect = async () => {
          if(!file){
               toast.error('Please upload an image');
               return;
          }
            const formData = new FormData();
            console.log(file);
            formData.append('file', file);
            try{
            const res = await axios.post('http://localhost:8000/predict_image', formData)
            setResult(res.data);
            localStorage.setItem('result', res.data);
               navigate('/result');
            
            }
               catch(err){
                    console.log(err);
                    toast.error('Error in detecting image');
                    setFile(null);
               }
          
     }

     
    function handleChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]); 
    }

  return (
    <div>
     <Toaster />

     <div className='bg-[#FBFFF4]'>
       <div className='bg-cyan-400 h-20'>

       <button onClick={()=>{
          window.location.href = '/';
        }} className='bg-gray-300 px-2 py-2 rounded-xl absolute left-16 top-4 flex justify-between gap-2 items-center'><FaHome size={35} /></button>

       </div>
       {file && <img src={URL.createObjectURL(file)} alt="" className='absolute h-72 top-24 left-1/2 -translate-x-1/2' />}
       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 border p-10 rounded-xl'>
     <input type="file" name="" id="" onChange={handleChange} />
     <button className='bg-gray-300 px-4 py-2 rounded-lg' onClick={handleDetect}>Go</button>
     </div>
         </div>
 
    </div>
  )
}

export default MainPage
