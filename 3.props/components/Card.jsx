import React from 'react'

import { CiBookmark } from "react-icons/ci";
const Card = (props) => {
  return (
    <div className="card">
        <div className='main'>
          <div className="top">
         <img src={props.data.logo} alt="" />
          <button>Save <CiBookmark /></button>
        </div>
        <div className="middle">
              <h4>{props.data.company} <span>{props.data.posted}</span></h4>
          <h3>{props.data.role}</h3>
          <div className="tag">
            {
                props.data.tags.map((tag)=>{
                        return <button>{tag}</button>
                })
            }
            
          </div>
        </div>
        </div>
        
        
        
        <div className="bottom">
            <div className="salary">
              <h3>{props.data.salary}</h3>
              <h6>{props.data.city}</h6>
            </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
