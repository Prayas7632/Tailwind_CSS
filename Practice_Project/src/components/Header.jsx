import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
            <img src="./assets/Logo.png" alt="logo" className='w-40 h-auto'/>
            <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-3 py-2 rounded-2xl'> Practice  Project </button>
        </div>
        <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Find Me</a></li>
            <li><a href="#">Practice with me</a></li>
        </ul>
        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
            <a href="#" className='text-gray-400'>Sign In</a>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Wait for me</button>
        </div>
        <div className='lg:hidden'>
            <FaBars />
        </div>
    </div>
  )
}

export default Header