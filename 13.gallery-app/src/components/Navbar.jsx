import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full min-h-14 bg-cyan-700 flex items-center px-4 gap-5">
        <div className="text-xl lg:text-2xl font-bold p-2 tracking-[0.2em] lg:tracking-[1.5em]">Image</div>
        <div className="w-full lg:w-180 h-8 text-black flex items-center gap-2">
          <input className='w-full h-full bg-white rounded-full  px-3 ' type="text" placeholder='search for images...' />
          <button className='w-8 h-8 shrink-0 bg-white text-lg flex rounded-full items-center justify-center cursor-pointer'>
            <i className="ri-search-line"></i>
          </button>
        </div>
      </div>
  )
}

export default Navbar
