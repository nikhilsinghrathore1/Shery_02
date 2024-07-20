import React from 'react'
import MoreInsta from '../components/MoreInsta'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import VideoCont from '../components/VideoCont'
// document that tell how a software is supposed to perform need of software engneering modularity-dividing it into chunks for testing and developing independently integrating the core changes continously and deploying them into production enviroment design pattern for solving matrix problem in software design various templates are provided software as a product to deliver computing potential accross network of hardware vehical for delivering the product encapsulation , abstraction adaptability software alows different system contraints by making changes in the software for customer satisfaction rapid delivary differenece btw/ program - product program is a set of instruction in order to achieve a specific taskk product - set of programs software products is defined as set of programs with proper documentation and license program is smaller is size because it is one of the stage involved in software development software product folows a lifecycle which involves feasibility studying so it is larger in size program can be created by a single user products are developed by a team of many people progam lacks documentation , product is well documented  
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

               <div className='w-full h-[160vh] px-4 pt-12'>
               <div className='  text-[32px] w-full leading-[35px] f5 font-light '>
                                             <p className='w-[78%] uppercase'>ideal textile for a cozy hotel ambiance</p>

                                             <div className='w-full flex h-[50vh] mt-8'>
                                                            <div className='w-[30%] flex items-end  gap-2 h-full'>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowLeft/></div>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowRight/></div>
                                                            </div>         
                                                            <div className='w-[72%] h-full rounded-lg overflow-hidden'>
                                                                           <img className='w-full h-full rounded-lg ' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a45b943d2e1892a8fff8e_slider-01-04-p-800.webp" alt="not showing" />
                                                            </div>
                                             </div>

                                             <p className='text-[12.9px] leading-[16px] f4 font-semibold mt-10'>Create an atmosphere of comfort and coziness <span className='opacity-60'> in your hotel with our diverse range of high-quality textiles.</span>Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.</p>
                              </div>


                              <div className='w-full flex h-[60vh]  mt-14'>
                                             <div className='w-[55%] h-full '>
                                                            <VideoCont/>
                                             </div>
                                             <div className='w-[45%] h-full pb-20 pl-3 flex items-end '>
                                                            <MoreInsta/>
                                             </div>
                              </div>
               </div>

                {/* this is the 3d text area */}
            <div className='w-full h-[118vh] pt-24 flex'>
                  <div className='w-[80%]  uppercase leading-none f1 text-[34px] pl-3 opacity-90 tracking-wide  h-full '>
                    <h1 className=''>curtains</h1>
                    <h1 className=' mt-[14px]'>blackout curtains</h1>
                    <h1 className='mt-[14px]'>sheers</h1>
                    <h1 className='leading-none mt-[14px]'>anti-vandal sheers</h1>
                    <h1 className='leading-none mt-[14px]'>no-noice curtain rods</h1>
                    <h1 className='leading-none mt-[14px]'>decorative pilloww</h1>
                    <h1 className='mt-[14px]'>table runners</h1>
                    <h1 className='mt-[14px]'>table cloth</h1>
                    <h1 className='mt-[14px]'>napkins</h1>
                  </div>
            </div>

            {/* this is the automative section */}

            <div className='w-full h-[200vh] px-4 '>
                      <div className='w-full h-[34vh] overflow-hidden rounded-lg'>
                            <video autoPlay muted loop className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d%2F6649e6d401492fd39ce57892_IMG_1559-transcode.webm"></video>
                      </div>

                      <div className='w-[80%] uppercase text-[30px]'>
                          <h1></h1>
                      </div>
            </div>





    </div>
  )
}

export default Landing