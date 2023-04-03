import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, labore?
        </p>
        <a href="mailto:joshuabetco28@gmail.com" className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500' >joshuabetco28@gmail.com</a>
        </div>
        <img src={`https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/49898415_2482140491815722_3828058665357672448_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeELlJbrPRczn7pInSPSS29bXVqNmOosjz1dWo2Y6iyPPUTCSh6N5e4B-NFcEPq20xdHWBlKfglm6C1VOrGLNWsE&_nc_ohc=klT2PAm0MmQAX_Mrgp1&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfCVqM2-V6PrxQxdIptZKplIOMr1-jy18_4XwDQ5YA8euw&oe=6436CB8E`} alt="Joshua Betco"  className='w-full md:w-6/12 rounded-lg object-cover' />
    </div>
  )
}

export default About