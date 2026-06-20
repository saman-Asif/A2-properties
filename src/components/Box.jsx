import React from 'react'

const Box = () => {
  return (
    <div>
       <div className='w-full h-auto border-white/20 border-b border-t flex flex-col justify-center items-center bg-[#0b0f19] md:px-16 md:py-20 p-4'>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
      Still curious?
    </h1>
    <p className='text-white/60 text-lg max-w-xl mb-6 text-center'>
        Request access and try it on your own codebase while we're in active development.
    </p>
    <button className='bg-indigo-600 font-bold hover:bg-indigo-700 text-black px-5 py-3 rounded-lg'>
  Request Access
</button>
    </div>
    </div>
  )
}

export default Box
