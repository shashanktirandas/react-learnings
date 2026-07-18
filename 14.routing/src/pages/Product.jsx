import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
      <div className='mt-2 w-full h-[90vh] text-lg  gap-2 flex flex-col font-semibold'>
            <div className="w-full p-3 flex justify-center gap-2">
              <Link to='men' >Men</Link>
              <Link to='women' >Women</Link>
            </div>

            <Outlet />
    </div>
    
  )
}

export default Product
