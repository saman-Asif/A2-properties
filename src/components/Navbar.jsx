import React from 'react'
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <div className='flex max-w-9xl h-16 mx-auto md:px-20 p-4 md:py-4 justify-between items-center w-full bg-[#0e131d]'>
        <div className=''>
          <Link to='/'>
        <img className='object-cover w-30' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" />
        </Link>
        </div>
      <div className=' text-gray-400 text-sm flex'>
        <ul className='md:flex gap-8 hidden md:visible'>
          <li>
<Link 
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
to='/features'>Features</Link>
          </li>
          <li>
<Link 
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
to='/skills'>Skills</Link>
          </li>
          <li>
<Link 
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
to='/working'>How it works</Link>
          </li>
          <li>
<Link 
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
to='/usecases'>Use cases</Link>
          </li>
          <li>
<Link
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
 to='/pricing'>Pricing</Link>
          </li>
          <li>
<Link 
className="relative text-grey-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-purple-700 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:text-white"
to='/faq'>FAQ</Link>
          </li>
          </ul>
          </div>
          <div className=' text-gray-300 text-sm space-x-2 items-center flex justify-center'>
<button className='border-white/30 border p-1 rounded-md hover:border-purple-700 transition-colors duration-300 ease-in-out'>
  <Sun size={22} />
</button>
<button className='text-white text-center font-bold hover:text-purple-700 hover:bg-white rounded-lg px-4 py-2.5'> 
  Sign in
</button>
<button className='bg-purple-600 font-bold hover:bg-purple-700 text-[#181818D9] px-5 py-2.5 rounded-lg'>
  Request Access
</button>
          </div>
          </div>
    </>
  )
}

export default Navbar
