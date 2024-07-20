import React from 'react'

const VideoCont = () => {
  return (
    <div className='w-[94%] h-[80%] bg-black rounded-lg p-[2px] '>
               <div className='w-full h-[87%] overflow-hidden'>
                              <video autoPlay muted loop className='w-full h-full object-cover' src="https://s3.amazonaws.com/webflow-prod-assets/6613fb0aff6a7761bf9a817d/663bcfe77765a0f1702b036f_insta-3.mp4"></video>
               </div>
               <div className='w-full h-[13%] bg-white '></div>
    </div>
  )
}

export default VideoCont