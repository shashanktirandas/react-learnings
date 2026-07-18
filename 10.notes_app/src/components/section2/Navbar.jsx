import React from 'react'
import logo from '../img/logo.png'
const Navbar = () => {
  return (
    <div className="w-full min-h-10 bg-gray-900 px-4 py-2.5 flex">
          <div className="flex items-center gap-2  ">
            <img className='h-7 w-7 rounded-sm object-cover' src={logo} alt="" />
            <div className="text-2xl font-bold text-blue-600">spaces</div>
            </div>
        </div>
  )
}

export default Navbar
