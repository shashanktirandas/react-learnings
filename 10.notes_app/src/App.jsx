import React, { useState } from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/Section2'
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

      {/* <Section1 notes={notes} setNotes={setNotes} />
      <Section2 notes={notes} setNotes={setNotes}/>
       */}
      

    </div>
  )
}

export default App
