import React from 'react'

const RightCardContent = (props) => {
  return (
    <div style={{"backgroundColor":'#00000033'}} className="absolute top-0 left-0  w-full h-full  py-10 pl-8 pr-6 flex flex-col justify-between">
            <h2 className="rounded-full text-2xl bg-white flex justify-center items-center h-12 w-12 font-bold ">{props.id+1}</h2>
            <div className="">
                <p className='text-xl mb-10 text-white font-medium text-shadow-lg pr-6 leading-relaxed'>{props.dis}</p>
                <div className=" flex items-center justify-between">
                <button style={{"backgroundColor":props.color}} className='rounded-3xl px-8 py-2  text-lg text-white font-medium'>{props.tag}</button>
                <button style={{"backgroundColor":props.color}} className='rounded-full px-4 py-2 text-lg text-white'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    
  )
}

export default RightCardContent
