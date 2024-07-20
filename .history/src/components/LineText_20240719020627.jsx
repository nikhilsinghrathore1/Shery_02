import React from 'react'

const LineText = ({text}) => {
  return (
               <div className='p-[7px] border-dashed border-b-[1px] text-[13px] sm:text-[13.5px] f1 border-black/30'>
               <p>{text}</p>
               </div>
  )
}

export default LineText