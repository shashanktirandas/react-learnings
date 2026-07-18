import React from 'react'
import LeftContainer from './leftContainer'
import RightContainer from './rightContainer'

const PageContent = () => {
  return (
    <div className="w-[93%] h-[90%]  rounded-4xl flex overflow-hidden">
        <LeftContainer />
        <RightContainer />
      </div>

  )
}

export default PageContent
