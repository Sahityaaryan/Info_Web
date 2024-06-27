import React from 'react'

export default function index  ()  {

   function postGraduteVeiwAllHandler() {
      
   }

  return (
    <div className='w-auto flex flex-col gap-9'>
          <div className=' bg-slate-800 w-auto h-44 flex flex-col justify-end text-white font-bold text-[2rem]'>
             <p className='p-7'>Teaching</p>
          </div>
          
          <div className='mx-4 flex flex-col gap-7'>
              <div className=' flex flex-row justify-between'>
                 <div className='text-black font-semibold text-[2rem]'><p>Postgradute</p></div>
                 <div><a href='./postgradute_more'>View all</a></div>
              </div>
              
              <div className='bg-slate-300 h-0.5 w-auto'></div>
                 <div className='w-auto h-64 bg-red-600 flex justify-center items-center'>
                    <p className="text-white font-bold text-[2rem] text-center tracking-wide">Postgradute Carausel </p>
                 </div>
          </div>
          
          <div className='mx-4 flex flex-col gap-7'>
              <div className=' flex flex-row justify-between'>
                 <div className='text-black font-semibold text-[2rem]'><p>Undergradute</p></div>
                 <div><a href='./undergradute_more'>View all</a></div>
              </div>
              
              <div className='bg-slate-300 h-0.5 w-auto'></div>
                 <div className='w-auto h-64 bg-red-600 flex justify-center items-center'>
                    <p className="text-white font-bold text-[2rem] text-center tracking-wide">Undergradute Carausel </p>
               </div>
          </div>
    </div>
  )
}
