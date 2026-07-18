import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className="w-full py-3 px-10 bg-gray-700 flex justify-between items-center text-white">
        <button onClick={()=>{
            navigate(-1)
        }} className='px-2 py-1 bg-amber-500 rounded-xl text-md'>Back</button>
      </div>
    </div>
  )
}

export default Navbar2
