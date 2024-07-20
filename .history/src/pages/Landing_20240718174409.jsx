import React from 'react'
import MoreInsta from '../components/MoreInsta'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'

import VideoCont from '../components/VideoCont'
import LineText from '../components/LineText';
import IncText from '../components/IncText';
import ThirdSection from '../components/ThirdSection';
import CurtainText from '../components/CurtainText'
// document that tell how a software is supposed to perform need of software engneering modularity-dividing it into chunks for testing and developing independently integrating the core changes continously and deploying them into production enviroment design pattern for solving matrix problem in software design various templates are provided software as a product to deliver computing potential accross network of hardware vehical for delivering the product encapsulation , abstraction adaptability software alows different system contraints by making changes in the software for customer satisfaction rapid delivary differenece btw/ program - product program is a set of instruction in order to achieve a specific taskk product - set of programs software products is defined as set of programs with proper documentation and license program is smaller is size because it is one of the stage involved in software development software product folows a lifecycle which involves feasibility studying so it is larger in size program can be created by a single user products are developed by a team of many people progam lacks documentation , product is well documented  

let Dtext=[["curtains","blackout curtains", "sheer","anti-vandal sheers" ,"no-noice curtain rods" , "decorative pillows","table runner" , "table cloth","napkins"],["curtains","sheers","tablecloths" , "napkins" ,"wooden blinds" ,"sunshades"]]

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

          <ThirdSection/>

                {/* this is the 3d text area */}
          <CurtainText text={Dtext[0]} height={"100vh"}/>

            {/* this is the automative section */}
            {/*  this is a very big section literaly gand phat gayi or maybe mujhe neend aarahi thi isliye but almost hogaya*/}
            <div className='w-full h-[200vh] px-4 '>
              {/* this is the video section */}
                      <div className='w-full h-[34vh] overflow-hidden rounded-lg'>
                            <video autoPlay muted loop className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d%2F6649e6d401492fd39ce57892_IMG_1559-transcode.webm"></video>
                      </div>
              {/* this is the main text area */}
                      <div className='w-[80%] f1 uppercase text-[28px] leading-[31px] mt-5'>
                          <h1>automated textile management</h1>
                      </div>

              {/* this is the paragraph area */}
                      <div>
                          <p className='leading-[16px]  mt-8 text-[12px] f5'>Creating comfort and efficiency: <span className='opacity-60'>automated control of blinds, curtains, and sheers opens up new possibilities for hotels and restaurants striving to create a unique atmosphere for their guests. </span> This technology allows easy control of lighting and privacy, ensuring comfortable conditions throughout the day.</p>
                          <p className='leading-[16px]  mt-6 text-[12px] f5'><span className='opacity-60'>Programming for efficiency: automated control allows</span> scheduling the opening and closing of textile products according to sleep schedules. <span className='opacity-60'>This ensures optimal energy usage and saves time and effort for staff, allowing them to focus on providing high-quality service to their guests.</span></p>
                      </div>

                      <div className='w-full h-[63vh] relative'>
                        {/* this is the black bg images of remote kinda thingy could be viberator if you have imagination or need  */}
                          <div className='w-[35%] absolute flex items-center justify-center top-10 right-8 h-[45%] bg-black rounded-lg'>
                            <img className='w-[90%] h-[90%] object-contain' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662b5a9bf1e1110165fff749_pult.webp" alt="not showing" />
                          </div>

                          {/* this is the video cont section  */}
                          <div className='w-[52%] h-[85%] absolute top-[215px] left-0'>
                              <VideoCont/>
                          </div>

                          <div className='absolute -bottom-20 right-[60px] '>
                          <MoreInsta/>
                          </div>
                      </div>
                          <div className='mt-24 h-[50vh] w-full pt-8 '>
                                   <LineText text={"Lighting control through blinds"}/>
                                   <LineText text={"Scheduling the opening/closing of curtains"}/>
                                   <LineText text={"Programmed opening of sheers for privacy"}/>
                                   <LineText text={"Data collection on energy consumption"}/>
                                   <LineText text={"Integration with smart home systems"}/>
                          </div>
            </div>

          

            <IncText/>

            <ThirdSection/>

            <CurtainText text={Dtext[1] } height={"60vh"}/>


            <div className='w-full px-3 h-[130vh]  relative overflow-hidden '>
            <h1></h1>
            </div>







    </div>
  )
}

export default Landing