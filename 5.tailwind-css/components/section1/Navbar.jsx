import React from 'react'
import { IoIosCall } from "react-icons/io";
const Navbar = () => {
  return (
    <div className=' w-full flex justify-between'>
      <div className="bg-black rounded-full text-white text-[18px] uppercase px-3 py-2" >target audience</div>
      <div className="uppercase text-[18px] font-bold flex items-center gap-2 tracking-widest">
        <IoIosCall className='w-5 h-5'/> digital banking platform</div>
    </div>
  )
}

export default Navbar
