import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[100vh]  fixed text-white flex flex-col justify-between z-40 top-0'>
        <div className=' flex items-center  justify-center xl:justify-between xl:px-8  pt-7 xl:pt-[14px]'>

                <div className='text-[12.5px] w-[30%] hidden xl:block leading-[17px] f1'>
                  <p>UA +8005602458</p>
                  <p className='text-[8px] opacity-60'>Friday 9 2024</p>
                </div>

               <div className='flex  flex-col items-center justify-center sm:leading-[22px] md:leading-[25px] xl:pt-4 xl:leading-[20px] leading-[18px]'>
                              <h1 className='text-[24px] sm:text-[30px] md:text-[33px] xl:text-[28px] xl:font-light f1'>Velours</h1>
                              <h2 className='text-[10px] sm:text-[14px] md:text-[15px] xl:text-[7.5px] f1 font-light tracking-widest '>HoReCa</h2>
               </div>

               <div className='text-[11px] w-[30%] text-right hidden xl:block leading-[17px] f1'>
                  <p>49.734.34.52 .24.73.1</p>
                  <p className='text-[8px] opacity-50'>ab ki baar 75 hazar damm</p>
                </div>

        </div>

        {/* this is the menu bar kinda thingy */}
        <div className='w-full xl:w-[33%] xl:mx-auto h-[10vh] xl:h-[11vh]   px-3  '>
          
          <div className='w-full h-[65%] bg-black rounded-md flex justify-between px-[2px] xl:p-1'>
            <div className='w-[18%] xl:w-[15%] h-full bg-white flex items-center justify-center overflow-hidden rounded-md'>
              <img className='w-[9100%] h-[100%] object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6624b9bbba2e8daa37ae2e54_download-img-02.webp" alt="not showing" />
            </div>

            <div className='w-[57%] xl:w-[45%]   xl:text-[12.5px] h-full text-[13px] sm:text-[14px] md:text-[15px] text-white leading-[16px] f2 flex items-center justify-center'>
              <p>Download our Brochour on services in the HoReCa industry</p>
            </div>


            <div className='w-[15%] xl:w-[30%] h-full bg-white flex items-center justify-center overflow-hidden rounded-md'>
              <img className='w-[80%] xl:hidden  h-[80%] object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6624bdfbd80898e1c3060de1_download-icon.webp" alt="not showing" />
              <p className='uppercase text-black text-[13px] f2'>Download PDF</p>
            </div>
          </div>



         

        </div>

    </div>
  )
}

export default Nav