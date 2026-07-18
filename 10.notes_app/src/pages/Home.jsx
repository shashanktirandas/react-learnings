import React from 'react'
import Section2 from '../components/section2/Section2'

const Home = (props) => {
  return (
    <div>
      <Section2 notes={props.notes} setNotes={props.setNotes} />
    </div>
  )
}

export default Home
