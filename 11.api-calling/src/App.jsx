import React, { useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
const App = () => {
  const [users, setUsers] = useState([])
  const getData=async()=>{
    
    console.log("Data is fetching...");
    // const responce= await fetch('https://jsonplaceholder.typicode.com/users');
    // const data=await responce.json();
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
    console.log(data)
  }
  return (
    <div>
      <button className='m-4 px-3 py-1 rounded-2xl bg-blue-600' onClick={getData}>Data Fetch</button>

      <div className="w-full flex flex-wrap gap-2 p-4">
        {
          users.map((user,idx)=>{
            return <Card key={idx} user={user}/>
          })
        }
      </div>
    </div>
  )
}

export default App
