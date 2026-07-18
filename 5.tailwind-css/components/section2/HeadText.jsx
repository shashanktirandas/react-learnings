import React from 'react'
import { MdArrowOutward } from "react-icons/md"; 

const HeadText = () => {
  return (
    <div className="">
    <div className="text-8xl font-bold flex flex-col gap-1 ">
        <span className="flex items-center gap-3">
          <span>Quick,</span>
          <span className="bg-lime-300 rounded-full px-4 pb-2 ">
            easy
          </span>
        </span>
      <span className='flex gap-2'>
        <span>and digital</span> 
        <MdArrowOutward className='h-20 w-20 border-4 border-gray-400 rounded-full flex justify-center items-center p-2'/>
        </span>
      </div>
      <div className="text-3xl uppercase font-bold mt-6">online banking platform</div>

      </div>
  )
}

export default HeadText
