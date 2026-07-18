import React from 'react'
import "remixicon/fonts/remixicon.css";
import RightCardContent from './RightCardContent';
const RightCard = ({user,id}) => {
  return (
    <div className="w-80 h-full  shrink-0 bg-amber-300 rounded-4xl overflow-hidden relative">
            <img src={user.img} alt="" className='w-full h-full object-cover' />
                <RightCardContent color={user.color} dis={user.dis} tag={user.tag} id={id}/>
    </div>
  )
}

export default RightCard
