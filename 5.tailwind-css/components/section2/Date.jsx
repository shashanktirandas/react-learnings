import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Date = () => {
  return (
    <div className="flex items-center gap-2 mb-20">
          <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center">
              <IoCall className="w-4 h-4 text-white" />
      </div>
      <div className="text-lg font-bold uppercase tracking-wider ">  March 2024</div>
    </div>
  )
}

export default Date
