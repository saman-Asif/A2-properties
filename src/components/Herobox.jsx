import React from 'react'

const Herobox = () => {
    const data = [
        {h1: '100%',p: 'local code execution'},
        {h1: '0',p: 'lines uploaded to us'},
        {h1: '1',p: 'token for CLI + editor'},
        {h1: '∞',p: 'skills, and growing'}
    ]
  return (
    <div className=' bg-[#0e131d] h-full w-full px-16 py-8 border-t border-white/10 border-b'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {data.map((item, index)=>(
            <div key={index} className='flex flex-col items-center justify-center gap-2'>
                <div className='grid'>
                <h1 className='text-indigo-700 text-4xl md:text-5xl font-bold'>
            {item.h1}
        </h1>
        <p className='text-xs text-white/40'>
{item.p}
        </p>
        </div>
        </div>
        ))}
        </div>
      </div>
  )
}

export default Herobox
