import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Topbar = () => {
  
  const navigate = useNavigate()
  const isUserPresent = localStorage.getItem("user")
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className='flex items-center justify-between bg-[#212121] fixed top-0 left-0 px-10 py-5 shadow-md w-screen h-[80px]'>
        <div className='text-xl font-semibold'>
            Virtual Aacharya
        </div>
        <div className='flex items-center gap-5'>
          {isUserPresent ? (
            <div className='flex items-center gap-5'>
              <span className='text-white font-bold text-lg'>{user?.name}</span>
              <button className='hover:text-orange-400 cursor-pointer' onClick={() => {navigate("/login"); localStorage.clear(); window.location.reload()}} >Logout</button>
            </div>
          ) : <>
            <Link className='link' to="/register"><span className='hover:text-orange-400 cursor-pointer'>Register</span></Link>
            <Link className='link' to="/login"><span className='hover:text-orange-400 cursor-pointer'>Login</span></Link>
          </>}
        </div>
    </div>
  )
}

export default Topbar