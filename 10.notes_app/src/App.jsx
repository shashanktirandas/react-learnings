import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';

const App = () => {
  let notesStored=JSON.parse(localStorage.getItem("notes"));
  if(!notesStored){
    localStorage.clear();
    localStorage.setItem('notes',[]);
    notesStored=[];
  }
   const [notes, setNotes] = useState(notesStored);
   localStorage.setItem('notes',JSON.stringify(notes));
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home notes={notes} setNotes={setNotes} />} />
        <Route path='/notes' element={<Notes notes={notes} setNotes={setNotes} />} />
      </Routes> 
       

    </div>
  )
}

export default App
