import React from 'react'
import Section1 from '../components/section1/section1'

const Notes = (props) => {
  return (
    <div>
      <Section1 notes={props.notes} setNotes={props.setNotes} />
    </div>
  )
}

export default Notes
