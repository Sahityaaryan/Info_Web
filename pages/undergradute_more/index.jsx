'use client'

import React from 'react'
import { useState,useEffect } from 'react';
import TeachingCoursesData from '../../data/teachingcoursesData'
import { CourseDetail } from '../postgradute_more/CourseDetail'


export default function UndergraduateMore(){

  const [selectedCourse,setSelectedCourse] = useState(0);

  useEffect(()=>{}, [selectedCourse])

  function currentCourseHandler(id) {
     setSelectedCourse(id);
  }
  return (
    <div className='flex flex-col gap-5'>
          
          <div className="bg-[url('https://www.iitp.ac.in/~anup/assets/images/team_banner.png')]">
             <p className='flex justify-start items-end w-auto h-96 p-7 text-white font-bold text-[2rem] '>Teaching</p>
          </div>

     <div  className='w-auto mx-16 flex flex-row'>
        <div className='w-52 flex flex-col gap-2'> 
           
           {TeachingCoursesData.map((course)=> {
               
               return (<div key={course.id} className='w-auto h-16'><button onClick={()=>currentCourseHandler(course.id)}>{course.name}</button></div>)
           })}
        </div>
        <div className=' h-auto w-0.5 bg-slate-600 '></div>
        <div className='ml-6 w-2/3 border-2 h-auto'><CourseDetail course={TeachingCoursesData[selectedCourse]} /></div>
     </div>
</div>
  )
}
