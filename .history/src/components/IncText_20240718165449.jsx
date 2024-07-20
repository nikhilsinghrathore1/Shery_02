import React, { useState } from 'react'

const IncText = () => {
               const [num, setnum] = useState(0)
  return (
    <div className='w-full px-1 flex h-[100vh] '>
               <div className='w-[60%] h-full flex items-center justify-center text-[21rem] font-light f1'>{num}</div>

               <div className='text-[12px] f1 leading-none flex flex-col items-center justify-center '>
                              <p>warrenty service from 3 years to 6 years</p>
               </div>

    </div>
  )
}

export default IncText