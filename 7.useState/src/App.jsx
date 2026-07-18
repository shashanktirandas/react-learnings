import React, { useState } from 'react'
import { forwardRef } from 'react'

const App = () => {
  // const [num, setNum] = useState(0);
  // const decreaseNum=()=>{
  //   setNum(num-1)
  // }
  // const increaseNum=()=>{
  //   setNum(num+1)
  // }
  // const jumpBy5=()=>{
  //   setNum(num+4)
  //   setNum(prev=>(prev+1))
  // }
  const users=[{username:"shashank",age:19},{username:"ronith",age:20},{username:"som",age:21}];
  const [index, setIndex] = useState(0);
  const forwardMove=()=>{
    if(index==users.length-1){
      setIndex(0);
      return;
    }
    setIndex(index+1);
  }
  const backwardMove=()=>{
    if(index<=0){
      setIndex(users.length-1);
      return
    }
    console.log(users.length,index)
    setIndex(index-1);
  }
  return (
    <div className='h-screen w-full flex justify-center items-center bg-black'>
      {/* <div className="min-w-120 min-h-10 flex justify-center items-center p-10 flex-col bg-lime-300 gap-3 rounded-3xl">
        <div className="text-8xl font-bold">{num}</div>
        <div className="flex justify-center text-xl w-full min-h-20 bg-blue-400 rounded-xl flex items-center gap-4 py-4 px-4">
          <div onClick={decreaseNum} className=" font-bold px-4 py-1 bg-yellow-200 rounded-sm">decrease</div>
          <div onClick={increaseNum} className=" font-bold px-4 py-1 bg-yellow-200 rounded-sm">increase</div>
          <div onClick={jumpBy5} className=" font-bold px-4 py-1 bg-yellow-200 rounded-sm">jump by 5</div>
        </div>
      </div> */}
      <div className="min-w-120 min-h-10 flex justify-center items-center p-10 flex-col bg-lime-300 gap-3 rounded-3xl">
        <div className="flex flex-col justify-center items center">
         <div className="text-5xl font-bold ">name : {users[index].username}</div>
        <div className="text-5xl font-bold">age : {users[index].age}</div>  
        <div className="text-5xl font-bold ">index : {index}</div>
        </div>
        <div className="flex justify-center text-xl w-full min-h-20 bg-blue-400 rounded-xl flex items-center gap-4 py-4 px-4">
          <div onClick={forwardMove} className=" font-bold px-4 py-1 bg-yellow-200 rounded-sm"> + </div>
          <div onClick={backwardMove} className=" font-bold px-4 py-1 bg-yellow-200 rounded-sm"> - </div>
        </div>
      </div>
    </div>
  )
}

export default App
