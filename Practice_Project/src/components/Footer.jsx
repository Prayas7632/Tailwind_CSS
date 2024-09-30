import React from 'react'

const Footer = () => {
  return (
    <div className='py-16 flex flex-col gap-12 md:flex-row md:justify-between'>
        <ul className='flex gap-6 font-lato text-gray-400'>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        <div className='flex gap-6'>
            <img src="./assets/help.png" alt="help" className='h-16'/>
            <div>
                <p className='font-playfair font-thin'>Practice with me</p>
                <a href="#" className='font-lato font-medium'>Contact me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer