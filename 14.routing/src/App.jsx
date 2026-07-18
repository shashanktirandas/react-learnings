import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Product from './pages/Product';
import Men from './pages/Men';
import Women from './pages/Women';
import NotFound from './pages/NotFound';
import CoursesDetails from './pages/CoursesDetails';
import Navbar from './pages/Navbar';
import Navbar2 from './pages/Navbar2';

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} >
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
        </Route>


        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursesDetails />} />
        <Route path='*' element={<NotFound />}/>

      </Routes>
      
      <div className="w-full py-3 px-10 bg-gray-800 flex flex-col justify-between  text-white pb-30">
        <h1 className="text-2xl font-bold">Footer</h1>

        <div className="flex gap-6 text-xl ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

    </div>
  );
};

export default App;