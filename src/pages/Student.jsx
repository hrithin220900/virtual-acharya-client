import React from 'react'
import { subjects } from '../utils/constants'

const Student = () => {
  return (
     <div className='flex flex-wrap gap-5'>
        {subjects.map((item, index) => (
            <span className='text-white border-2 border-gray-300 rounded-xl font-semibold px-6 py-3 cursor-pointer'>{item}</span>
        ))}
    </div>
  )
}

export default Student