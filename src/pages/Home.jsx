import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [selectedFile, setSelectedFile] = useState()
  const [img, setImg] = useState("")

  const handleClick = async () => {
    setImg(URL.createObjectURL(selectedFile))
  }

  return (
    <div className='flex flex-col gap-10 items-center mt-[80px]'>
      <div className='flex items-center justify-around w-full h-full'>
        <div className='flex flex-col items-center gap-10'>
            <h1 className='font-bold text-xl text-white'>Teacher Section</h1> 
            <div className="text-white border-2 border-gray-300 rounded-xl font-semibold px-6 py-3 hover:text-black hover:bg-white"><Link className='link hover:text-black' to="/teacher">Teacher</Link></div>
        </div>
        <div className='border-[0.5px] border-gray-200 h-[100px] w-0'></div>
        <div className='flex flex-col items-center gap-10'>
            <h1 className='font-bold text-xl text-white'>Student Section</h1>
            <div className="text-white border-2 border-gray-300 rounded-xl font-semibold px-6 py-3 hover:text-black hover:bg-white"><Link className='link hover:text-black' to="/student">Student</Link></div>
        </div>
      </div>
      <hr className='border-[0.5px] border-gray-200 w-screen' />
      <div className='flex justify-between gap-10'>
        <div className='flex flex-col gap-5 items-center'>
          <p className='text-4xl mb-10 font-bold'>File Upload Section</p>
          <label className='px-4 py-2 bg-black text-white rounded-xl' htmlFor="fileInput">Upload Docs(pdf and word files only)</label>
          <input id="fileInput" type={"file"} accept="application/msword, application/pdf" onChange={(e) => setSelectedFile(e.target.files[0])} className="hidden" />
          {selectedFile ? <span className='rounded-full border-2 border-gray-100 px-4 py-2'>{selectedFile.name}</span> : <span>No files Selected</span>}
          <button className='px-4 py-2 bg-orange-500 text-white w-full' onClick={handleClick}>Submit Uploaded Docs</button>
        </div>
        <iframe src={img} className='w-[750px] h-[750px]'></iframe>
      </div>
    </div>
  )
}

export default Home