import React from 'react'

const SingleHero = ({img , text}) => {
  return (
    <div className='w-full h-[100vh] relative'>
               <div className='absolute bg-black/10 flex items-center justify-center w-full xl:pb-20 h-full top-0'>
                              <h1 className='uppercase text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>{text}</h1>
               </div>
               <img className='w-full h-full object-cover' src={img} alt="not showing" />
    </div>
  )
}

export default SingleHero