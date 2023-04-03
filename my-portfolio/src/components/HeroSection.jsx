import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
        <h1  className='text-2xl md:text-4xl md-1 md:mb-3 text-indigo-600 dark:text-indigo-400 font-semibold'>Hi, this is Joshua</h1>
        <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequatur.</p>
        <a href="#works" className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>See Works</a>
        </div>
    </div>
  )
}

export default HeroSection