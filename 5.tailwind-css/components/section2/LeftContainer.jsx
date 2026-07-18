import React from 'react'
import HeadText from './HeadText';
import Date from './Date';
import MarketSection from './MarketSection';
const LeftContainer = () => {
  return (
    <div style={{"backgroundColor":"#ededed"}} className="w-1/2 h-full px-12 py-14 flex flex-col justify-between rounded-br-[60px] ">

      <div className="">
      <Date />
     <HeadText />
      </div>
      <MarketSection />
    </div>
  )
}

export default LeftContainer
