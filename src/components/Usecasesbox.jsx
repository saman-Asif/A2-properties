import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Usecasesbox = () => {
  return (
    <div>
       <div className='w-full h-auto reveal-elements border-white/20 border-b border-t flex flex-col justify-center items-center bg-[#0b0f19] md:px-16 py-16 md:py-20 p-4'>
        <h1 class="text-2xl max-w-3xl md:text-5xl text-center text-white font-bold tracking-tight mt-4 mb-4">
      Bring your own provider — even a custom one
    </h1>
    <p className='text-white/60 text-lg max-w-xl mb-6 text-center'>
    If it speaks MCP, it works. Self-hosted models on your own GPUs are first-class.
    </p>
    <div className='flex gap-4'>
        <Link to='/requestaccess'>
    <button className='bg-indigo-600 font-bold hover:bg-indigo-700 text-black px-5 py-3 rounded-lg'>
  Request Access
</button></Link>
<Link to='/skills'>
<button className='text-white border border-white/60 px-5.5 py-2.5 rounded-md  hover:border-indigo-600  flex gap-2 justify-center items-center transition-colors duration-300 ease-in-out hover:text-indigo-600'>
    Browse Skills <ArrowRight size={16} />
</button></Link>
</div>
    </div>
    </div>
  )
}

export default Usecasesbox
