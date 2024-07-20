import React from 'react'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'

const Landing = () => {
  return (
    <div className='w-full overflow-hidden'>
               <div className='w-full h-[300vh] relative '>
               <Nav/>     
               <SingleHero/>
               </div>
    </div>
  )
}

export default Landing