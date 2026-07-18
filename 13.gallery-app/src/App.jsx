import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import axios from 'axios'
const App = () => {
  const [index, setIndex] = useState(1)
  const [photosData, setPhotosData] = useState([])
  const getData=async()=>{
    const {data}=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`);
    setPhotosData(prev => [...prev, ...data]);
    console.log(data);
  }
  useEffect(() => {
    return () => {
      getData()
    }
  }, [index])
  
  let pageContent=<div className="w-full min-h-screen">
            <div className=" absolute top-1/2 left-1/2 w-full h-screen  text-2xl text-white">
                          Loading...
                        </div>
  </div>
  
  if(photosData.length!=0){
      pageContent=<div className="w-full min-h-screen  flex p-8 gap-4 flex-wrap" >
            {photosData.map((elem,idx)=>{
              return <Card elem={elem} idx={idx} />
            })}
          </div>
  }

  useEffect(() => {
    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100
        ) {
            setIndex(prev => prev + 1);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);


  return (

    <div>
      <Navbar />

      {pageContent}

      {/* <div className="w-full py-4 flex justify-center items-center gap-2 text-lg text-black font-bold">
        <button className='px-3 py-1  bg-amber-300 rounded-sm m-4' onClick={()=>{
          if(index>1)
          setIndex(index-1);
      }}>prev</button>
        <h1 className='text-white'>page {index}</h1>
      <button className='px-3 py-1 bg-amber-300 rounded-sm m-4' onClick={()=>{
          setIndex(index+1);
      }}>next</button>
      </div> */}
    </div>
  )
}

export default App
