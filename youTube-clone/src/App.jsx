import Navbar from './Components/Navbar/Navbar';
// import React,{useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Videos from './Pages/Video/Videos';
function App() {
  const [sidebar,setSidebar]=useState(true)

  return (
    <>
      <div>
      <Navbar setSidebar={setSidebar} ></Navbar>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/video/:categoryId/:videoId' element={<Videos/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
