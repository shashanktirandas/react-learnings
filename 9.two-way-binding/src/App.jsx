import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("")
  const submitDetails=(e)=>{
      e.preventDefault();
      console.log("form submited",username);
      setUsername('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
          submitDetails(e);
      }} >
        <input 
              type="text" 
              placeholder='Enter username'
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
              value={username} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
