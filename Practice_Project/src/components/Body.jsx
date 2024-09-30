import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4'>
        <div className='flex items-center justify-center'>
            <img src="./assets/Blue-Shape.svg" alt="shape" className='h-64 -rotate-[15deg]'/>
            <img src="./assets/images.jpg" alt="image" className='absolute h-64 rotate-[30deg]'/>
            <img src="./assets/download.jpg" alt="hero" className='absolute h-64'/>
        </div>
        <div>
            <h1 className='text-5xl font-bold font-playfair leading-tight py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, non.</h1>
            <p className='font-lato text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus amet commodi voluptate doloremque vero, eum minima ab magni optio eaque inventore iste quia in nisi neque, quasi repellendus vitae?</p>
            <form action="" className='flex flex-col gap-4'>
                <input className='rounded-md px-6 py-3 placeholder:text-gray-400' type="email" placeholder='enter email address'/>
                <button className='rounded-md px-4 py-3 bg-blue-200 hover:bg-blue-600 text-white'> Practice Projects</button>
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