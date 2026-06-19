import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from 'react-router-dom';
import Features from './pages/Features';
import Skills from './pages/Skills';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-[#181818d9]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  )
}

export default App
