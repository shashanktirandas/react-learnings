import React from 'react'
import CardOptions from './CardOptions'

const Card = (props) => {
  return (
    <div className="w-[165px] md:w-[250px] lg:w-[350px] min-h-25 bg-gray-800 rounded-2xl pl-4 py-3 flex flex-col gap-2 justify-between">
        
         <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center pr-2 ">  
            <div className="text-xl font-bold truncate">{props.heading}</div>
            <div className="relative text-lg ">
              <i class="ri-more-2-fill"></i>
                    <CardOptions />
            </div>
            </div> 
        <div className="text-sm min-h-6 line-clamp-3 mr-5">{props.dis}</div>
        </div>
        <div className="text-[12px] font-medium mr-2">{props.date}</div>
    </div>
          
  )
}

export default Card
