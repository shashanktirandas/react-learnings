import React from 'react'

const App = () => {
  const btnClicked=(elem)=>{
    console.log("button clicked",elem);
    if(elem.innerText=="clicked"){
        elem.innerText="click"
    }else{
      elem.innerText="clicked"
    }
    
  }
  const onScrolling=(elem)=>{
    console.log(elem)
  }
  return (
    <div className='w-full h-80 bg-orange-500' onWheel={(elem)=>{
      onScrolling(elem)
    }}>
      <h1 className='text-4xl font-bold'>Funtions</h1>
      <button className='m-4 text-2xl px-5 py-2 bg-red-900 rounded-full' onClick={(elem)=>{
        btnClicked(elem.target)
      }
        }>click</button>
    </div>
  )
}

export default App
