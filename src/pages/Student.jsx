import React from 'react'
import { subjects } from '../utils/constants'

const Student = () => {
  return (
     <div className='flex flex-col gap-10 w-full'>
      <h1 className='mt-[80px] text-white'>Student Section</h1>
      <div className='flex flex-wrap gap-5'>
          {subjects.map((item, index) => (
              <span className='text-white border-2 border-gray-300 rounded-xl font-semibold px-6 py-3 cursor-pointer hover:text-black hover:bg-white'>{item}</span>
          ))}
      </div>
      <hr className='border-[0.5px] border-gray-200 w-[79vw]' />
      <div className='flex justify-between gap-10'>
        <iframe src="https://ruasguruji.streamlit.app/?embedded=true" className='w-[90vw] h-[800px]'></iframe>
      </div>
    </div>
  )
}

export default Student