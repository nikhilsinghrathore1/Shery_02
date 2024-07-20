import React from 'react'
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  return (
    <div className='w-full h-[100vh] '>

                              <div className='h-[85%] w-full relative text-center pt-20 leading-none tracking-wide uppercase'>
                                          <h1 className='text-[5.1rem] f1'>Horeca</h1>
                                          <h2 className='tracking-[14px] text-[12px] mt-1 font-bold f1'>velorus</h2>

                              </div>
                              <div className='h-[15%] w-full relative px-4'>
                                <div className='w-full h-1/2 text-[14px] border-b-[1px] border-black/30 font-bold flex justify-between items-center f1 tracking-tighter'>
                                  <p>+8005602458</p>
                                  <p className='flex items-center gap-2'>Back to top <GoArrowUp/></p>
                                </div>
                                <div className='w-full h-1/2 text-[13px] f1 flex justify-between items-center '>
                                    <div>
                                      <p>© 2024</p>
                                    </div>
                                    <div>
                                      <p>By NikoChan</p>
                                    </div>
                                </div>
                              </div>
    </div>
  )
}

export default Footer