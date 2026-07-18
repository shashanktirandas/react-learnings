import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
const Section1 = (props) => {
  // For Section 1 (Editor)
  const navigate =useNavigate();

  function formatEditorDate(date) {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }


  const {notes,setNotes}=props;
  const [heading, setHeading] = useState("")
  const [discription, setDiscription] = useState('')
  
  const saveNote=(e)=>{
      e.preventDefault();
      if (heading.trim() !== "" || discription.trim() !== ""){
      console.log("submitted");
      const copyNotes=[...notes]
      copyNotes.push({
                      heading,
                      date:new Date(),
                      discription})
      setNotes(copyNotes)
      console.log(copyNotes);
      setHeading('');
      setDiscription(''); 
      
      }else{
        console.log("Enter something");
        return;
      }
  }

  const handleBack = (e) => {
      saveNote(e);
      navigate("/");
    };
  return (
    <form onSubmit={(e)=>{
      //notesSubmiting(e);
      handleBack(e);
    }}
    className="w-full h-screen bg-amber-950 bg-blue-950 flex flex-col ">
            <div type="submit" className="w-full min-h-10  flex items-center px-4 py-1 pt-6 " >
                    <button className='px-2 py-0.5  rounded-full bg-gray-500 text-[23px]'> <i class="ri-arrow-left-line"></i> </button>
            </div>
            <div className="w-full h-full  px-4 pl-6 flex flex-col pb-1 gap-2">
              
              <input value={heading} onChange={(e)=>{
                setHeading(e.target.value)
              }} className='w-full text-2xl mt-5 font-semibold border-none outline-none focus:outline-none focus:ring-0 ' type="text" placeholder='Your title...'/>
            <div className="text-[13px] text-gray-100  font-medium">{formatEditorDate(new Date())}</div>
            <textarea value={discription} onChange={(e)=>{
                setDiscription(e.target.value)
              }} className='w-full h-[90%] text-lg font-normal pb-10 border-none outline-none focus:outline-none focus:ring-0' type="text" placeholder='Enter your notes...'></textarea>
   
            </div>
          </form>
  )
}

export default Section1


