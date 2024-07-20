import React, { useState } from 'react'

const IncText = () => {
               const [num, setnum] = useState(0)
  return (
    <div className='w-full px-1  flex h-[100vh] '>
               <div className='w-[60%] h-full flex items-center justify-center text-[21rem] font-light f1'>{num}</div>

               <div className='text-[12.5px] w-[40%] leading-[16px] f5  flex flex-col items-start justify-center '>
                              <p >Warrenty service</p>
                              <p >from 3 years to 6 years</p>
               </div>

    </div>
  )
}

export default IncText