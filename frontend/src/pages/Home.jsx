import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const {userData, serverUrl, setUserData}=useContext(userDataContext)
  const navigate=useNavigate()
  const handleLogOut=async()=>{
    try {
      const result = axios.get(`${serverUrl}/api/auth/logout`, {withCredentials: true})
      setUserData(null)
      navigate('/signin')
    } catch (error) {
      setUserData(null)
      console.log(error);
    }
  }
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#0f0f5a] flex justify-center items-center flex-col gap-3.75'>
      <button className='min-w-37.5 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300 absolute top-5 right-5' onClick={handleLogOut}>Log out </button>
      <button className='min-w-37.5 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300 absolute top-25 right-5 px-4 py-2.5' onClick={()=>navigate('/customize')}>Customize your assistant </button>
      <div className='w-75 h-100 flex justify-center items-center overflow-hidden rounded-4xl shadow-lg '>
        <img src={userData?.assistantImage} alt="" className='h-full object-cover '/>
      </div>
      <h1 className='text-white font-semibold'>I'm {userData?.assistantName}</h1>
    </div>
  )
}

export default Home
