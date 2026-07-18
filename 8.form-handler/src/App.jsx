import React from 'react'

const App = () => {
  const submitDetails=(e)=>{
      e.preventDefault();
      console.log("form submited");
      
  }
  return (
    <div>
      <form onSubmit={(e)=>{
          submitDetails(e);
      }} >
        <input type="text" placeholder='Enter username' />
        <input type="password" placeholder='password' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
