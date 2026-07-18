import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-3 px-10 bg-gray-800 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Routes</h1>

        <div className="flex gap-6 text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
