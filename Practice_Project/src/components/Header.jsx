import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
            <img src="./assets/Logo.png" alt="logo" className='w-40 h-auto'/>
            <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-1 py-1 rounded-2xl'> Practice  Project </button>
        </div>
        <div>
            <FaBars />
        </div>
    </div>
  )
}

export default Header