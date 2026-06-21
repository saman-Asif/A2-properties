import React from 'react'
import { Link } from 'react-router-dom'

const Skillsbox = () => {
  return (
    <div>
       <div className='w-full reveal-elements h-auto border-white/20 border-b border-t flex flex-col justify-center items-center bg-[#0b0f19] md:px-16 py-16 md:py-20 p-4'>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white text-center font-bold tracking-tight mt-4 mb-4">
      Want a skill we don't list yet?
    </h1>
    <p className='text-white/60 text-lg max-w-xl mb-6 text-center'>
    The catalog is expanding throughout the development phase. Request access and tell us what would make you a master of your codebase.
    </p>
    <Link to='/requestaccess'>
    <button className='bg-indigo-600 font-bold hover:bg-indigo-700 text-black px-5 py-3 rounded-lg'>
  Request Access
</button></Link>
    </div>
    </div>
  )
}

export default Skillsbox
