import React, { useState } from 'react'

const IncText = () => {
               const [num, setnum] = useState(0)
  return (
    <div className='w-full px-1  pt-40 flex h-[75vh] '>
               <div className='w-[60%] h-full flex items-center justify-center text-[21rem] font-light f1'>{num}</div>

               <div className=' w-[40%] leading-[18px] f1 pt-28 flex flex-col items-start justify-center '>
                              <p className='text-[16px]' >Warranty service</p>
                              <p className='text-[12.5px]' >from 3 years to 6 years</p>
               </div>

    </div>
  )
}

export default IncText