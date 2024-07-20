import React from 'react'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'
import VideoCont from '../components/VideoCont'

const Landing = () => {
  return (
    <div className='w-full overflow-hidden'>
               {/* this is the first image gallery part */}
               <div className='w-full h-[400vh] relative '>
               <Nav/>     
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f01781250e3c4f8ed19_hero-01-p-1080.webp"} text={"hotel"}/>
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f00e43626f944ce0076_hero-02-p-1080.webp"} text={"restaurant"}/>
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f011d36d94902bbbcd3_hero-03-p-1080.webp"} text={"catering"}/>
               <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f0015a49ebd0cb05e50_hero-04-p-1080.webp"} text={"+automative"}/>
               </div>

               {/* this is the second text wala part  */}

               <div className='w-full  h-[200vh] px-4 pt-32 leading-[42px]'>
                              {/* this is the variable weight text */}
                              <div className='w-full f4 text-[32px] font-semibold text-black uppercase h-fit'>
                                             <p><span className='pl-44'>full</span> responsibility from project to implementation.</p>
                              </div>

                              <div className='f4 text-[13px] font-semibold mt-10 leading-none'>
                                             <p>More about us</p>
                                             <p className='mt-3 leading-[16px] font-semibold'>The textile production Velours HoReCa was founded in Lviv in 2005. <span className='opacity-60'>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>
                              </div>

                              <div className='w-full flex h-[50vh] mt-12 '>
                                             <div className='w-1/2 h-full flex justify-end'>
                                                            <VideoCont/>
                                             </div>
                                             <div className='w-1/2 h-full flex flex-col justify-between'>

                                                            <div className='w-full'>
                                                                           <p></p>
                                                            </div>

                                             </div>
                              </div>
               </div>


    </div>
  )
}

export default Landing