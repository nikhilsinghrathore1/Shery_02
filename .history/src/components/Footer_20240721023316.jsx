import React from 'react'
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  return (
    <div className='w-full h-[100vh]  '>

                              <div className='h-[85%] w-full relative text-center pt-20 sm:pt-32 leading-none tracking-wide uppercase '>
                                          <h1 className='text-[5.1rem] xl:text-[15.5rem] z-10  relative f1 xl:font xl:tracking-[53px] xl:leading-[10px]'>Horeca</h1>
                                          <h2 className='tracking-[14px] text-[12px] mt-1 z-10 relative font-bold xl:font-semibold xl:pr-[270px] f1 xl:mt-[110px] xl:text-[1.65rem] xl:tracking-[38px] xl:f4'>velours</h2>
                                          <div className='absolute top-0 w-full h-full bg-black '>
                                                    <img className='w-full h-full object-cover '  src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/663e0bd810d15c2ecfd40722_bg-curt-3.png" alt="not showing" />
                                          </div>

                              </div>
                              <div className='h-[15%] w-full relative xl:hidden px-4'>
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

                              <div className='h-[15%] w-full px-2 relative hidden xl:block'>
                                <div className='w-full h-1/2 flex '>
                                                        <div className='h-full f1 font-semibold text-[11px] pl-5  w-[20%] '>
                                                              <p className='w-[50%]'>Full responsibility from project to implementation.</p>
                                                        </div>
                                </div>
                              </div>
    </div>
  )
}

export default Footer