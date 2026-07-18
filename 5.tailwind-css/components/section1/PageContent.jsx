import React from 'react'
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const PageContent = (props) => {
  return (
      <div className="w-full h-[80vh] mt-8 pb-2  flex gap-25
        rounded-4xl ">
        <LeftContainer />
        <RightContainer users={props.users}/>
      </div>
  )
}

export default PageContent
