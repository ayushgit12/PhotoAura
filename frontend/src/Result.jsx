import React, { useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import axios from 'axios';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { TypeAnimation } from 'react-type-animation';
import { HiOutlineExternalLink } from "react-icons/hi";
import Delay from 'react-delay';


const Result = () => {

     if(!localStorage.getItem('result')){
          window.location.href = '/mainpage';
     }
     const res = localStorage.getItem('result');

     const [images, setImages] = useState([]);
     const [desc, setDesc] = useState('');
     useEffect(() => {
        const f = async () => {
          await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${res}&client_id=k-_Jb2LBaBjhs28Tt-aEQbJHmbNdCWl-M7-QrPvPBEo`
          ).then((res) => {
               res.data.results.forEach ( (item) => {
                    setImages((prev) => [...prev, item.urls.regular ]);
               })
          }
          )
          .catch((err) => {
               console.log(err);
          }) 
     }
     f();
    }
     ,[])

     const genAI = new GoogleGenerativeAI(
      "AIzaSyBEM3b-_GQ7tzMoFkD9u_449jTZwXSRPoo"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const chat = model.startChat({ history: [] });
    useEffect(() => {
      async function fun() {
        try{
        const result1 = await chat.sendMessage(
          `give a small description about ${localStorage.getItem("result")} in 100 words without any heading.`
        );
       setDesc(result1.response.text());
      }
     catch (err) {
      console.log(err);
      setDesc('No Description Found');
    }
    }
      fun();
      
    
    }, []);

  return (
     <div>


     <div className='bg-[#FBFFF4] min-h-screen'>
       <div className='bg-cyan-400 h-20'>
       <button onClick={()=>{
          window.location.href = '/';
        }} className='bg-gray-300 px-2 py-2 rounded-xl absolute left-16 top-4 flex justify-between gap-2 items-center'><FaHome size={35} /></button>

        <button onClick={()=>{
          window.location.href = '/mainpage';
        }} className='bg-gray-300 px-6 py-2 rounded-xl absolute right-16 top-6 flex justify-between gap-2 items-center'>Search More <FaMagnifyingGlass size={20} /></button>
       </div>


       <h1 className='text-4xl font-semibold m-3 mx-6'>Prediction:</h1>

               <p className='text-3xl m-3 mx-6 text-green-500'>{res.replace('_', ' ')}</p>
               <div className='text-xl bg-white mx-6 p-3 w-fit'>
                {console.log(desc)}
                <Delay wait={3000}>
            <TypeAnimation 
            className=''
          sequence={
                [
                     1000,
                     '...',
                     1000,
                     desc
                ]
              } 
              />
              </Delay>
              </div>

              <p
              onClick={()=>{
                window.open(`https://en.wikipedia.org/wiki/${localStorage.getItem("result")}`, '_blank');
              }}
               className='mx-8 mt-10 text-blue-600 text-lg flex items-center gap-1 cursor-pointer hover:underline'>Want to know More? <HiOutlineExternalLink /></p>
            <h1 className='mx-3 text-4xl mt-6 text-center'>More Related Images:</h1>
               <div className='md:w-3/4 mx-4 md:mx-auto mt-6'>
               <ImageList variant="masonry" cols={3} gap={8}>
  {images.map((item) => (
    
    <ImageListItem>
      <img
        src={item}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
               </div>


       </div>
 
    </div>
  )
}

export default Result
