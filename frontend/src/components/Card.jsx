import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

function Card({image}) {
  const { serverUrl, userData, setUserData, frontendImage, setFrontendImage, selectedImage, setSelectedImage, backendImage, setBackendImage
    } = useContext(userDataContext)
  return (
    <div className={`w-43 h-62.5 bg-amber-950 border-2 border-blue-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black hover:border-4 hover:border-white cursor-pointer ${selectedImage==image?'shadow-black border-4 border-white':null}`} onClick={()=>setSelectedImage(image)}>
      <img src={image} className='h-full object-cover' />
    </div>
)}

export default Card