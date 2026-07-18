import React from 'react'
import PageContent from './PageContent'
import Navbar from './Navbar'

const Section1 = (props) => {
  return (
    <div className="mx-16 pt-10 pb-12 min-h-screen">
      <Navbar />
      <PageContent users={props.users} />
    </div>
  )
}

export default Section1
