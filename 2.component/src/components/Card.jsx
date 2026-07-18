import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.dis}</p>
        <button>visit now</button>
      </div>
  )
}

export default Card
