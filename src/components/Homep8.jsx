import React from 'react'
import { Cpu } from "lucide-react";
const Homep8 = () => {
    const data = [
        { text:'Bring any MCP-compatible provider — EigenMCP speaks the Model Context Protocol.'},
        {text:'Best with custom and self-hosted LLMs running on your own GPUs.'},
        {text:'One account, one client — connect a single provider at a time.'},
        {text:'Your editor and terminal connect with the same Client token.'}
    ]
  return (
    <div>
       <div className='w-full h-auto reveal-elements bg-[#0b0f19] md:px-16 py-16 p-4'>
        <div className='md:flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 w-full'>
              <span className='text-xs uppercase text-indigo-600'>Built for your stack</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
            Made for custom LLMs and your own GPUs
          </h1>
          <p className='text-white/60 text-lg max-w-2xl mb-10'>
              EigenMCP supports the Model Context Protocol, so it works with self-hosted and custom models — not just hosted chat apps.
          </p>
</div>
<div className='md:w-1/2 w-full reveal-elements'>
{data.map((item, index)=>(
    
    <div key={index} className='text-sm border transition-colors duration-300 hover:border-indigo-600 text-white bg-[#131926] border-white/20 rounded-xl p-4 flex flex-col gap-4 mb-4'>
        <div className='flex gap-2'>
        <p className='text-indigo-600 shrink-0 bg-indigo-500/10 p-1 rounded-full flex items-center justify-center'><Cpu size={12} /></p>
{item.text}
</div>
    </div>
))}
</div>
          </div>
    </div>
    </div>
  )
}

export default Homep8
