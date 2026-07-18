import React, { useContext } from 'react'
import "remixicon/fonts/remixicon.css";
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const {theme,setTheme}=useContext(ThemeContext);
  const modeShift =()=>{
    console.log('Mode change');
    if(theme==='light')
      setTheme('dark');
    else
      setTheme('light')
  }
  return (
    <div className={theme}>
      <h3 className='text-2xl'> Conetxt api</h3>
      <div className="flex gap-5 text-xl items-center">
        <h4>Home</h4>
        <h4>Course</h4>
        <h4>About</h4>
        <button onClick={modeShift}
        className='px-2 py-1 bg-amber-300 rounded-full text-[14px] text-gray-600'>
          <i className="ri-moon-fill"></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
