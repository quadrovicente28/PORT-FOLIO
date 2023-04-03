import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300
    rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Joshua Betco</a>
        <a href="mailto:joshuabetco28@gmail.com" 
        className=' text-sm md:text-md hover:text-indigo-500'
        >joshuabetco28@gmail.com</a>
        <p className='text-xs  mt-2 text-gray-500'>
        © Joshua Betco {new Date().getFullYear()} All Rights Reserve 
        </p>
    </div>
  )
}

export default Footer