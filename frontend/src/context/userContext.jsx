import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const userDataContext = createContext()
function UserContext({ children }) {
    const serverUrl='http://localhost:8000'
    const [userData, setUserData]=useState(null)
    const [loading, setLoading]=useState(true)
    const [frontendImage, setFrontendImage]=useState(null)
    const [backendImage, setBackendImage]=useState(null)
    const [selectedImage, setSelectedImage]=useState(null)
    const handleCurrentUser=async()=>{
        try {
            const result = await axios.get(`${serverUrl}/api/user/current`, {withCredentials:true})
            setUserData(result.data)
            console.log(result.data);
            setLoading(false)
        } catch (error) {
            console.log('getCurrentUser error:', error.message);
            setUserData(null)
            setLoading(false)
        }
    }
    useEffect(()=>{
        handleCurrentUser()
    },[])
    const value = {
        serverUrl, userData, setUserData, loading, frontendImage, setFrontendImage, selectedImage, setSelectedImage, backendImage, setBackendImage
    }
    return (
        <div>
            <userDataContext.Provider value={value}>
                {children}
            </userDataContext.Provider>
        </div>
    )
}

export default UserContext
