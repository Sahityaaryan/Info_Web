import React from 'react'
import { Carousel } from '../../components/Carousel'
import ResponsiveCarousel from '../../components/teaching/ResponsiveCarousel'
import postGraduteData from '../../data/postGraduteData'
import underGraduteData from '../../data/underGraduteData'
export default function Teaching() {


  return (
    <div className='w-auto flex flex-col gap-9 text-secondary-dark dark:text-secondary-light'>
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 m-4 p-5 pb-12  text-ternary-dark dark:text-ternary-light">
          Teaching
        </p>
      </div>

      <div className='px-8 flex flex-col gap-7'>
        <div className=' flex flex-row justify-between'>
          <div className='font-semibold text-[2rem]'><p>Postgradute</p></div>
          <div><a href='./postgradute_more'>View all</a></div>
        </div>

        <div className='bg-slate-300 h-0.5 w-auto'></div>

        <div className=''><ResponsiveCarousel courses={postGraduteData} type="postGradute" /></div>
      </div>

      <div className='px-8 flex flex-col gap-7'>
        <div className=' flex flex-row justify-between'>
          <div className=' font-semibold text-[2rem]'><p>Undergradute</p></div>
          <div><a href='./undergradute_more'>View all</a></div>
        </div>

        <div className='bg-slate-300 h-0.5 w-auto'></div>
        <div>
          <div><ResponsiveCarousel courses={underGraduteData} type="underGradute" /></div>
        </div>
      </div>

    </div>
  )
}
