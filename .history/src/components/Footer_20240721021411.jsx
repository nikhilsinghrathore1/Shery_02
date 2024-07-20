import React from 'react'
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  return (
    <div className='w-full h-[100vh]  '>

                              <div className='h-[85%] w-full relative text-center pt-20 sm:pt-32 leading-none tracking-wide uppercase '>
                                          <h1 className='text-[5.1rem] xl:text-[17rem] f4 xl:font-semibold xl:tracking-[24px] xl:leading-[10px]'>Horeca</h1>
                                          <h2 className='tracking-[14px] text-[12px] mt-1 font-bold xl:font-light pr-40 f1 xl:mt-32 xl:text-[3rem] xl:f4'>velorus</h2>

                              </div>
                              <div className='h-[15%] w-full relative px-4'>
                                <div className='w-full h-1/2 text-[14px] border-b-[1px] border-black/30 font-bold flex justify-between items-center f1 tracking-tighter'>
                                  <p>+8005602458</p>
                                  <p className='flex items-center gap-2'>Back to top <GoArrowUp/></p>
                                </div>
                                <div className='w-full h-1/2 text-[13px] f1 opacity-70 flex justify-between items-center '>
                                    <div>
                                      <p>© 2024</p>
                                    </div>
                                    <div>
                                      <p>By Niko<span className='text-red-900 text-[15px]'>C</span>han</p>
                                    </div>
                                </div>
                              </div>
    </div>
  )
}

export default Footer