import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/userContext'
import axios from 'axios'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Customize2() {
    const {userData, backendImage, selectedImage, serverUrl, setUserData}=useContext(userDataContext)
    const [assistantName, setAssistantName]=useState(userData?.assistantName || "")
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate()
    const handleUpdateAssistant=async()=>{
        try {
            setLoading(true)
            let formData=new FormData()
            formData.append('assistantName',assistantName)
            if(backendImage){
                formData.append('assistantImage', backendImage)
            }else{
                formData.append('imageUrl', selectedImage)
            }
            const result = await axios.post(`${serverUrl}/api/user/update`,formData, {withCredentials:true})
            console.log(result.data);
            setUserData(result.data)
            setLoading(false)
            navigate('/')
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
  return (
    <div className='w-full h-screen bg-linear-to-t from-[black] to-[#0f0f5a] flex justify-center items-center flex-col relative'>
        <IoMdArrowRoundBack className='absolute top-7.5 left-7.5 cursor-pointer text-white w-7 h-6.25 hover:text-amber-600' onClick={()=>navigate('/customize')}/>
        <h1 className='text-white text-[30px] text-center p-5 mb-4'>Enter your <span className='text-blue-700'>Assistant Name</span></h1>
        <input type="text" placeholder='eg. shifra' className='w-full max-w-65 h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-[18px]' required onChange={(e)=>setAssistantName(e.target.value)} value={assistantName} />
        {assistantName && <button className='min-w-60 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300' disabled={loading} onClick={handleUpdateAssistant}>{!loading?'Create your Assistant':'Loading....'}</button>}        
    </div>
  )
}

export default Customize2
