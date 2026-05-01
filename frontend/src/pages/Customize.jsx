import React, { useContext, useRef, useState } from 'react'
import Card from '../components/Card'
import r2 from '../assets/r2.jpg'
import r3 from '../assets/r3.jpg'
import r7 from '../assets/r7.jpg'
import r8 from '../assets/r8.jpg'
import r9 from '../assets/r9.jpg'
import { RiImageAddFill } from "react-icons/ri";
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function Customize() {
  const navigate= useNavigate()
  const inputImage = useRef()
  const { serverUrl, userData, setUserData, frontendImage, setBackendImage, setFrontendImage, selectedImage, setSelectedImage } = useContext(userDataContext)
  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#0f0f5a] flex justify-center items-center flex-col'>
      <IoMdArrowRoundBack className='absolute top-7.5 left-7.5 cursor-pointer text-white w-7 h-6.25 hover:text-amber-600' onClick={()=>navigate('/')}/>
      <h1 className='text-white text-[30px] text-center p-5 mb-4'>Select your <span className='text-blue-700'>Assistant Image</span></h1>
      <div className='w-[90%] max-w-[60%] flex justify-center items-center flex-wrap gap-5'>
        <Card image={r2} />
        <Card image={r3} />
        <Card image={r7} />
        <Card image={r8} />
        <Card image={r9} />
        <div className={`w-43 h-62.5 bg-amber-950 border-2 border-blue-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black hover:border-4 hover:border-white cursor-pointer flex items-center justify-center ${selectedImage == 'input' ? 'shadow-black border-4 border-white' : null}`} onClick={() => {
          inputImage.current.click()
          setSelectedImage('input')
        }
        }>
          {!frontendImage && <RiImageAddFill className='text-white w-8 h-8 ' />}
          {frontendImage && <img src={frontendImage} className='h-full object-cover'></img>}
        </div>
        <input type="file" accept='image/*' ref={inputImage} hidden onChange={handleImage} />
      </div>
      {selectedImage && <button className='min-w-37.5 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300' onClick={()=>navigate('/customize2')}>Next</button>}
    </div >
  )
}

export default Customize
