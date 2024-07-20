import React from 'react'

const ScannerSection = () => {
  return (
               <div className='w-full hidden xl:flex h-[70%] justify-between items-start pt-[73px] px-[10px]  '>
               {/* this is the about us section for the xl screen */}
                   <div className='text-[11.5px] f4 font-semibold w-[24%] tracking-tight'><p>More about us</p></div>

                   {/* this is the first qr scanner section  */}
                   <div className='h-full w-[30%] '>
                     <p className='text-[11.5px] h-fit f4 font-semibold leading-[14px] w-[55%] '>The textile production Velours HoReCa was founded in Lviv in 2005. <span className='opacity-50'>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>
                     {/* this is the scanner component */}
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
                   </div>

                   {/* this is the text line content section */}

                   <div className='w-[44%] pr-32 h-full flex flex-col items-end'>
                     <div className='w-[60%]'>
                       <div className='w-full p-1 f1 text-[12px] tracking-tighter leading-[17px] border-dashed border-b-[1px] border-black/30 '>
                                 <p>With extensive experience in the Horeca sector - 18 years <span className='opacity-50'>[as of 2024]</span></p>
                       </div>
                       
                       <div className='w-full p-1 f1 text-[12px] tracking-tighter leading-[17px] border-dashed border-b-[1px] border-black/30 mt-2 '>
                                 <p>With extensive experience in the Horeca sector - 18 years <span className='opacity-50'>[as of 2024]</span></p>
                       </div>

                     </div>

                   </div>    
             </div>
  )
}

export default ScannerSection