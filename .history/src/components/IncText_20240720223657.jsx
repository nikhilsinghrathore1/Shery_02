import React, { useState } from 'react'

const IncText = () => {
               const [num, setnum] = useState(0)
  return (
    <div className='w-full px-1  pt-28 flex h-[80vh] sm:h-[100vh] xl:h-[80vh]'>
               <div className='w-[60%]  h-full flex items-center justify-end text-[21rem] xl:text-[35rem] font-light f1'>{num}</div>

               <div className=' w-[40%] leading-[18px] xl:leading-[15px] f1 pt-28 flex   flex-col items-start justify-center '>
                              <p className='text-[16px] md:text-[17px] xl:text-[12px]' >Warranty service</p>
                              <p className='text-[12.5px] md:text-[13.5px] xl:text-[12px]' >from 3 years to 6 years</p>
               </div>

    </div>
  )
}

export default IncText