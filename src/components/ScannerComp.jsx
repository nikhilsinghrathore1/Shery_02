import React from 'react'
import MoreInsta from './MoreInsta'

const ScannerComp = () => {
  return (
    // this is the full scanner section
               <div className='w-[56%] mt-2 h-[50%] flex items-end '>
               <div className='w-[55%] pr-4 h-full pt-5 '>

               <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" viewBox="0 0 100 100" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M88.3333 100H99.1667H100V99.1667V88.3333H99.1667V99.1667H88.3333V100ZM99.1667 11.6667H100V0.833333V0H99.1667H88.3333V0.833333H99.1667V11.6667ZM11.6667 100V99.1667H0.833333V88.3333H0L0 99.1667V100H0.833333H11.6667ZM0 11.6667H0.833333V0.833333H11.6667V0H0.833333H0V0.833333L0 11.6667Z" fill="black"></path>
</svg>
               </div>

               <div className='h-full flex items-end pb-4  w-[45%]'>
                 <MoreInsta/>
               </div>
           </div>
  )
}

export default ScannerComp