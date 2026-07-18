import React from 'react'
import RightCard from './RightCard'

const RightContainer = (props) => {
  return (
    <div id="right" className="w-3/4 mb-3 h-full  rounded-4xl flex flex-nowrap overflow-auto gap-10 ">
        {
            props.users.map(function (elem,idx){
                console.log(elem);
                return <RightCard key={idx} user={elem} id={idx}/>
            })
        }
    </div>
  )
}

export default RightContainer
