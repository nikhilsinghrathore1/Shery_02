import React from 'react'
import MoreInsta from '../components/MoreInsta'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
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

               <div className='w-full  h-[120vh] px-4 pt-32 leading-[42px]'>
                              {/* this is the variable weight text */}
                              <div className='w-full f4 text-[32px] font-semibold text-black uppercase h-fit'>
                                             <p><span className='pl-44'>full</span> responsibility from project to implementation.</p>
                              </div>

                              <div className='f4 text-[13px] font-semibold mt-10 leading-none'>
                                             <p>More about us</p>
                                             <p className='mt-3 leading-[16px] font-semibold'>The textile production Velours HoReCa was founded in Lviv in 2005. <span className='opacity-60'>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>
                              </div>

                              <div className='w-full flex h-[50vh] mt-12 '>
                                             <div className='w-1/2 h-full flex justify-end pt-3'>
                                                            <VideoCont/>
                                             </div>
                                             <div className='w-1/2 h-full flex flex-col justify-between pl-3 pb-16 f5 font-light'>

                                                            <div className='w-full leading-[17px]  text-[13px]'>
                                                                           <p>With extensive experience in the Horeca sector - 18 years </p>
                                                                           <p className='opacity-70'>[as of 2024]</p>

                                                                           <div className='border-y-[1px] border-black/20 py-1 mt-3'>
                                                                                          <p>We offer both warranty and post-warranty servicing.</p>
                                                                           </div>
                                                            </div>

                                                            <div className='f4 pl-2'>
                                                                           <MoreInsta/>
                                                            </div> 

                                                        

                                             </div>
                              </div>
               </div>

               <div className='w-full h-[250vh] px-4 pt-12'>
               <div className=' uppercase text-[32px] w-full leading-[35px] f5 font-light '>
                                             <p className='w-[78%]'>ideal textile for a cozy hotel ambiance</p>

                                             <div className='w-full flex h-[50vh] mt-8'>
                                                            <div className='w-[30%] flex items-end  gap-2 h-full'>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowLeft/></div>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowRight/></div>
                                                            </div>         
                                                            <div className='w-[72%] h-full rounded-lg overflow-hidden'>
                                                                           <img className='w-full h-full rounded-lg ' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a45b943d2e1892a8fff8e_slider-01-04-p-800.webp" alt="not showing" />
                                                            </div>
                                             </div>

                                             <p className='text-[13px] leading-[16px] f1 font-light'>Create an atmosphere of comfort and coziness <span> in your hotel with our diverse range of high-quality textiles.</span>Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.</p>
                              </div>
               </div>


    </div>
  )
}

export default Landing