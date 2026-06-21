import React from 'react'
import { Hand } from "lucide-react";
import { Link } from 'react-router-dom';
const Homep10 = () => {
  return (
    <div>
      <div className='w-full reveal-elements h-auto flex flex-col justify-center items-center bg-indigo-600 md:px-16 py-16 p-4'>
        <span className='text-xs uppercase text-black'><Hand size={26} /></span>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-black font-bold tracking-tight mt-4 mb-4">
      It's all in your hands
    </h1>
    <p className='text-black text-md max-w-2xl mb-6 text-center'>
        Choose your skills, keep your code local, and watch every move. Request access and help shape EigenMCP while it's in active development.
    </p>
    <Link to='/requestaccess'>
    <button className='bg-black font-bold hover:bg-black/90 text-white px-5 py-3 rounded-lg'>
  Request Access
</button></Link>
    </div>
    </div>
  )
}

export default Homep10
