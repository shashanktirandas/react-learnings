import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
    const param = useParams();
    console.log(param)
  return (
    <div>
      <div className='w-full h-[90vh] flex justify-center items-center text-7xl font-extrabold'>
      {param.id} Courses Details page
    </div>
    </div>
  )
}

export default CoursesDetails
