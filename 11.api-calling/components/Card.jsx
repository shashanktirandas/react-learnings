import React from 'react'

const Card = (props) => {
  return (
    <div className="min-w-40 min-h-10 bg-lime-800 rounded-xl flex flex-col p-3 ">
            <div className="">username : {props.user.name}</div>
            <div className="">email : {props.user.email}</div>
        </div>
  )
}

export default Card
