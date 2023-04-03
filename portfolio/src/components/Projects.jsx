import React from 'react'
import ProjectItem from './ProjectItem'
import barberosImg from '../assets/Barberos.jpg'
import paresImg from '../assets/Pares.jpg'
import plantitosImg from '../assets/Plantitos.jpg'
import primeVideoImg from '../assets/PrimeVideo.jpg'


function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
    <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut repellat illo, repudiandae accusantium labore quae corrupti sint, inventore incidunt eaque! Alias neque accusamus placeat mollitia eaque voluptates.
    </p>
      <div className='grid sm:grid-cols-2 gap-12' >
        <ProjectItem img={barberosImg} title='Barbers App' link='https://quadrovicente28.github.io/Group-9-WD30/Index/index.html'/>
        <ProjectItem img={paresImg} title='Pares App' link='https://quadrovicente28.github.io/Quadros-Pares/'/>
        <ProjectItem img={plantitosImg} title='Plantitos App' link='https://www.quadros-plantito.store/'/>
        <ProjectItem img={primeVideoImg} title='Prime App' link=''/>
       </div>
    </div>
    
  )
}

export default Projects
