import React from 'react'
import girl from "./girl.png";
const RightContainer = () => {
  return (
    <div className="w-1/2 h-full bg-white flex relative ">
        <div style={{"backgroundColor":"#ededed"}} className="w-3/5 h-full rounded-b-[60px] flex items-end ">
        <div className="w-full h-80 border-20 border-white rounded-[60px] bg-blue-400"></div>
        </div>
        <div className="w-2/5 h-full bg-white rounded-b-[60px] ">
        <div style={{"backgroundColor":"#ededed"}} className="rounded-br-[60px] w-full h-1/6">
        </div>
        <div className="w-full h-5/6">
        <div className=" w-full h-3/5 bg-blue-400 border-[20px] border-white rounded-[60px] -mb-2">
        </div>
        <div className="w-full h-2/5 bg-lime-400 rounded-[60px] relative">
            <div className="z-10 w-full h-full border-[20px] border-white rounded-[60px] absolute top-0 left-0">
            
            </div>
        </div>
        </div>
        <img src={girl} className="absolute bottom-0 left-[30%] w-100 h-170  mb-5 object-cover "/>
        </div>
    </div>
//     <div className="relative w-1/2 h-full">

//     {/* Top Right */}
//     <div className="absolute top-8 right-0
//                     w-64 h-44
//                     bg-blue-500
//                     rounded-[32px]" />

//     {/* Bottom Left */}
//     <div className="absolute bottom-0 left-0
//                     w-56 h-48
//                     bg-blue-500
//                     rounded-[32px]" />


//     {/* Bottom Right */}
//     <div className="absolute bottom-0 right-0
//                     w-40 h-40
//                     bg-lime-300
//                     rounded-[32px]" />

//     {/* Girl */}
//     <img
//         src={girl}
//         className="
//         absolute
//         bottom-0
//         left-1/2
//         -translate-x-1/2
//         h-full
//         object-contain
//         z-20
//         "
//     />

// </div>
  )
}

export default RightContainer
