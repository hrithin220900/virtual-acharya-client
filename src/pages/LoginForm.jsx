import React, { useRef } from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { SERVER } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const otpRef = useRef()
    const phoneRef = useRef()

    const navigate = useNavigate()

    const handleLogin = async(e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${SERVER}/auth/signin`,{
          phone:phoneRef.current.value,
          password:otpRef.current.value,
        })
        navigate("/")
        toast.success("Login successful!!", {duration:5000})
        localStorage.setItem("user", JSON.stringify(res.data)) 
        window.location.reload()
      } catch (err) {
        toast.error(err.response.data, {duration:5000})
      }
    }

  return (
    <div>
        <Toaster position='top-center' />
        <h1 className='font-bold my-5'>Virtual Aacharya</h1>
        <h3 className='my-5'>Login to your Account</h3>
        <form className='flex flex-col'>
            <input ref={phoneRef} className='bg-white p-5 rounded-lg border-2 text-black border-gray-400 mb-5' type="text" required placeholder="Enter Your Phone Number" />
            <input ref={otpRef} type="text" className='bg-white p-5 rounded-lg border-2 text-black border-gray-400 mb-5' required placeholder='Enter Password (OTP sent to your mobile number)' />
            <button className='p-3 rounded-lg bg-black' onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default LoginForm