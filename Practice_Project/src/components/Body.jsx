import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex lg:justify-end'>
        <div className='flex items-center justify-center lg:flex-1 lg:h-[400px] lg:order-2 '>
            <img src="./assets/Blue-Shape.svg" alt="shape" className='h-64 -rotate-[15deg] md:h-72 lg:h-[400px]'/>
            <img src="./assets/images.jpg" alt="image" className='absolute h-64 rotate-[30deg] md:h-72 lg:h-[400px]'/>
            <img src="./assets/download.jpg" alt="hero" className='absolute h-64 md:h-72 lg:h-[400px]'/>
        </div>
        <div className='lg:flex-1 lg:order-1'>
            <h1 className='text-5xl font-bold font-Playfair leading-tight py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, non.</h1>
            <p className='font-lato text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus amet commodi voluptate doloremque vero, eum minima ab magni optio eaque inventore iste quia in nisi neque, quasi repellendus vitae?</p>
            <form action="" className='flex flex-col gap-4 md:flex-row'>
                <input className='rounded-md px-6 py-3 placeholder:text-gray-400' type="email" placeholder='enter email address'/>
                <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'> Practice Projects</button>
            </form>
            <div className='flex gap-2'>
                <img src="./assets/check.png" alt="checkmark" className='h-8'/>
                <p className='font-lato text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, assumenda.</p>
            </div>
        </div>
    </div>

  )
}

export default Body