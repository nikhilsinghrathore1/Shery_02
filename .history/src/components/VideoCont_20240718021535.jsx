import React from 'react'

const VideoCont = () => {
  return (
    <div className='w-[94%] h-[80%] bg-black rounded-lg pt-[3px] px-[2px] '>
               <div className='w-full h-[87%] overflow-hidden rounded-lg'>
                              <video autoPlay muted loop className='w-full h-full object-cover' src="https://s3.amazonaws.com/webflow-prod-assets/6613fb0aff6a7761bf9a817d/663bcfe77765a0f1702b036f_insta-3.mp4"></video>
               </div>
               <div className='w-full h-[13%] pt-1'>
                              <img className='w-7 h-7 object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/663bcbd3012e5e6821be914c_logo-horeca.png" alt="not showing" />
               </div>
    </div>
  )
}

export default VideoCont