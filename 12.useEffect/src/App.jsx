import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    return () => {
      console.log("Adding a value...");
    }
  }, [a])

  useEffect(() => {
    return () => {
      console.log("Adding b value...");
    }
  }, [b])
  

  return (
    <div>
      <h1>Hello</h1>
      <h2>A : {a}</h2>
      <h2>B : {b}</h2>
      <button className='px-4 py-2 bg-blue-700 rounded-xl m-2' onClick={()=>{
          setA(a+1)
      }}>add A</button>
      <button  className='px-4 py-2 bg-blue-700 rounded-xl m-2' onClick={()=>{
          setB(b-1)
      }}>sub B</button>
    </div>
  )
}

export default App
