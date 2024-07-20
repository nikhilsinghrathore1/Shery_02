import React from 'react'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'

const Landing = () => {
  return (
    <div className='w-full overflow-hidden'>
               <div className='w-full h-[300vh] relative '>
               <Nav/>     
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f01781250e3c4f8ed19_hero-01-p-1080.webp"} text={"hotel"}/>
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f00e43626f944ce0076_hero-02-p-1080.webp"} text={"hotel"}/>
               </div>
    </div>
  )
}

export default Landing