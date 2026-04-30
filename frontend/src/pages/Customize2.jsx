import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/userContext'

function Customize2() {
    const {userData}=useContext(userDataContext)
    const [assistantName, setAssistantName]=useState(userData?.AssistantName || "")
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#0f0f5a] flex justify-center items-center flex-col'>
        <h1 className='text-white text-[30px] text-center p-5 mb-4'>Enter your <span className='text-blue-700'>Assistant Name</span></h1>
        <input type="text" placeholder='eg. shifra' className='w-full max-w-65 h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-[18px]' required onChange={(e)=>setAssistantName(e.target.value)} value={assistantName} />
        {assistantName && <button className='min-w-60 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300'>Create your Assistant</button>}
        
      
    </div>
  )
}

export default Customize2
