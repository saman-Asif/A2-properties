import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Link,Outlet  } from 'react-router-dom';
import Features from './pages/Features';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Howitworks from './pages/Howitworks';
import Usecases from './pages/Usecases';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Signin from './pages/Signin';
import Requestaccess from './pages/Requestaccess';
function MainLayout (){
  return (
    <div className='bg-[#181818d9]'>
      <Navbar/>
     <Outlet/>
    </div>
  )
}
// 2. Main App Component
export default function App() {
  return (
      <Routes>
        {/* Auth Route: Completely isolated full-screen container */}
        <Route path="/signin" element={<Signin />} />

        {/* Regular Routes: All routes inside here will display the Navbar */}
        <Route element={<MainLayout />}>
         <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/working" element={<Howitworks/>} />
        <Route path="/usecases" element={<Usecases/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/requestaccess" element={<Requestaccess/>} />
        </Route>
      </Routes>
  );
}