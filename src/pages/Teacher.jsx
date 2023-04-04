import React from 'react'
import { subjects } from '../utils/constants'

const Teacher = () => {

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='mt-[80px] text-white'>Teacher Section</h1>
      <div className='flex flex-wrap gap-5'>
          {subjects.map((item, index) => (
              <span className='text-white border-2 border-gray-300 rounded-xl font-semibold px-6 py-3 cursor-pointer hover:text-black hover:bg-white'>{item}</span>
          ))}
      </div>
    </div>
  )
}

export default Teacher