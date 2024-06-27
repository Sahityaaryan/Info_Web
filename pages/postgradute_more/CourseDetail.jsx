

 const CourseDetail = ({course}) => {
  return (
    <div className='flex flex-col gap-5 p-3'>

      <div className='text-black font-medium text-[2rem]'>{course.name}</div>
      <div className='w-2/3 h-auto '><img src={course.img}/></div>
      <div>{course.discription}</div>
    </div>
  )
}

export {CourseDetail}