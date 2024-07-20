import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[100vh]  fixed text-white flex flex-col justify-between z-40 top-0'>
        <div className=' flex items-center justify-center pt-7'>

               <div className='flex  flex-col items-center justify-center leading-[18px]'>
                              <h1 className='text-[24px] f1'>Velorus</h1>
                              <h2 className='text-[10px] f1 '>HoReCa</h2>
               </div>
        </div>

        {/* this is the menu bar kinda thingy */}
        <div className='w-full h-[10vh] pb-2 px-3'>
          <div className='w-full h-[90%] bg-black flex justify-between px-1'>
            <div className='w-[20%] h-full bg-white'></div>
          </div>
        </div>

    </div>
  )
}

export default Nav