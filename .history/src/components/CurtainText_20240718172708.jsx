import React from 'react'

const CurtainText = ({text , height}) => {
  return (
               <div className='w-full pt-8 flex' style={{height:{height}}}>
               <div className='w-[80%]  uppercase leading-none f1 text-[34px] pl-3 opacity-90 tracking  h-full '>
                 <h1 className='mt-[14px]'>{text[0]}</h1>
                 <h1 className='mt-[14px]'>{text[1]}</h1>
                 <h1 className='mt-[14px]'>{text[2]}</h1>
                 <h1 className='mt-[14px]'>{text[3]}</h1>
                 <h1 className='mt-[14px]'>{text[4]}</h1>
                 <h1 className='mt-[14px]'>{text[5]}</h1>
                 <h1 className='mt-[14px]'>{text[6]}</h1>
                 <h1 className='mt-[14px]'>{text[7]}</h1>
                 <h1 className='mt-[14px]'>{text[8]}</h1>
               </div>
         </div>
  )
}

export default CurtainText