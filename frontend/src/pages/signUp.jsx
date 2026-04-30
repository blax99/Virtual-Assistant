import React, { useContext, useState } from 'react'
import bg from '../assets/rw.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/userContext';
import axios from 'axios'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const { serverUrl, userData, setUserData } = useContext(userDataContext)
  const handleSignUp = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)

    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`, {
        name, email, password
      }, { withCredentials: true })
      setUserData(result.data)
      setLoading(false)
      navigate('/customize')
    } catch (error) {
      setUserData(null)
      setLoading(false)
      setErr(error.response.data.message)
    }
  }
  return (
    <div className='w-full h-screen flex justify-center bg-cover bg-center items-center' style={{ backgroundImage: `url(${bg})` }} >
      <form onSubmit={handleSignUp} className='w-[90%] h-150 max-w-125 bg-[#0e000079] backdrop-blur-md shadow-lg shadow-black flex flex-col items-center justify-center gap-5 px-5'>
        <h1 className='text-white text-[30px] font-semibold mb-7.5'>Register to <span className='text-blue-700'>Virtual Assistant</span></h1>
        <input type="text" placeholder='Enter your Name' className='w-full h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-[18px]' required onChange={(e) => { setName(e.target.value) }} value={name} />
        <input type="email" placeholder='Enter your Email' className='w-full h-15 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 py-2.5 rounded-full text-[18px]' required onChange={(e) => { setEmail(e.target.value) }} value={email} />

        <div className='w-full h-15 outline-none border-2 border-white bg-transparent text-white rounded-full text-[18px] relative'>
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full h-full rounded-full outline-none bg-transparent  text-white placeholder-gray-300 px-5 py-2.5 ' required onChange={(e) => { setPassword(e.target.value) }} value={password} />
          {!showPassword && <FaEye className='absolute top-5.5 right-5 w-5 cursor-pointer' onClick={() => { setShowPassword(true) }} />}
          {showPassword && <FaEyeSlash className='absolute top-5.5 right-5 w-5 cursor-pointer' onClick={() => { setShowPassword(false) }} />}
        </div>
        {err.length > 0 && <p className='text-red-500 text-[17px]'>*{err}</p>}
        <button className='min-w-37.5 h-15 bg-white rounded-full text-black font-semibold text-[19px] mt-7.5 cursor-pointer hover:bg-blue-800 hover:text-white transition-colors duration-300' disabled={loading}>{loading?"Loading...":"Sign Up"}</button>
        <p className='text-white text-[18px]'>Already have an account ? <span className='text-blue-400 cursor-pointer' onClick={() => { navigate('/signin') }}>Sign In</span></p>
      </form>
    </div>
  )
}

export default SignUp
