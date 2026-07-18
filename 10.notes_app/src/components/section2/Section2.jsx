import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { Link } from 'react-router-dom';
const Section2 = (props) => {
  // For Section 2 (Notes List)
  function formatListDate(date) {
    const noteDate = new Date(date);
    const now = new Date();
  
    // Today
    if (noteDate.toDateString() === now.toDateString()) {
      return `Today, ${noteDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`;
    }
  
    // Yesterday
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
  
    if (noteDate.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${noteDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })}`;
    }
  
    // Same Year
    if (noteDate.getFullYear() === now.getFullYear()) {
      return noteDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
  
    // Previous Years
    return noteDate.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }
  
  return (
    <div className="w-full min-h-screen bg-gray-950 ">
        <Navbar />
        <div className="w-full  py-6 px-4 flex gap-3  flex-wrap ">
          {
            props.notes.map((note,idx)=>{
              const title =note.heading.trim() ||
                                note.discription.trim().split("\n")[0].slice(0, 30) ||
                                "Untitled Note";
              return <Card 
                          key={idx}
                          heading={title} 
                          date={formatListDate(note.date)} 
                          dis={note.discription} />
            })
          }
          
        </div>
        
          <Link to='/notes' className="absolute bottom-5 right-10 px-3 py-2 text-3xl bg-blue-700 rounded-full">
           <i class="ri-add-line"></i>
           </Link>
       
      </div>
  )
}

export default Section2
