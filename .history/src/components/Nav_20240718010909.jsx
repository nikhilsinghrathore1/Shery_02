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
        <div className='w-full h-[10vh]  px-3  '>
          
          <div className='w-full h-[65%] bg-black rounded-md flex justify-between px-[2px]'>
            <div className='w-[18%] h-full bg-white flex items-center justify-center overflow-hidden rounded-md'>
              <img className='w-[90%] h-[90%] object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6624b9bbba2e8daa37ae2e54_download-img-02.webp" alt="not showing" />
            </div>

            <div className='w-[57%] h-full text-[13px] text-white leading-[15px] f2 flex items-center justify-center'>
              <p>Download our Brochour on services in the HoReCa industry</p>
            </div>


            <div className='w-[15%] h-full bg-white flex items-center justify-center overflow-hidden rounded-md'>
              <img className='w-[80%] h-[80%] object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6624bdfbd80898e1c3060de1_download-icon.webp" alt="not showing" />
            </div>
          </div>



         

        </div>

    </div>
  )
}

export default Nav