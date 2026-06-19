import React from 'react'
import { Check,X } from "lucide-react";
const Homep4 = () => {
  return (
    <div>
       <div className='w-full h-auto bg-[#0b0f19] md:px-16 md:py-16 p-4'>
        <span className='text-xs uppercase text-indigo-600'>The difference</span>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-10">
      Stop pasting. Start integrating.
    </h1>
    <div className='flex gap-4'>
        <div className='left-div w-1/2 border bg-[#131926] border-white/20 rounded-2xl p-6 flex flex-col gap-4 '>
        <h2 className='text-lg font-bold text-white/60 leading-relaxed'>A plain chat LLM
</h2>
        <ul className='text-sm text-white/60 leading-relaxed flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
            <p className='text-red-300 bg-red-950 rounded-full p-1'><X size={12} /></p><li>Copy-paste code in and out by hand</li>
            </div>
             <div className='flex gap-2 items-center'>
            <p className='text-red-300 bg-red-950 rounded-full p-1'><X size={12} /></p>
            <li>No access to your files or terminal</li>
            </div>
             <div className='flex gap-2 items-center'>
            <p className='text-red-300 bg-red-950 rounded-full p-1'><X size={12} /></p>
            <li>You re-explain your project every session</li>
            </div>
             <div className='flex gap-2 items-center'>
            <p className='text-red-300 bg-red-950 rounded-full p-1'><X size={12} /></p>
            <li>No idea what it would actually run</li>
            </div>
        </ul>
        </div>
        <div className='right-div w-1/2 border bg-[#676769] border-indigo-600 rounded-2xl p-6 flex flex-col gap-4 '>
<h2 className='text-lg font-bold text-white leading-relaxed'>EigenMCP integration
</h2>
        <ul className='text-sm text-white leading-relaxed flex flex-col gap-2'>
            <div className='flex gap-2 items-center'>
           <p className='text-green-500 bg-green-950 rounded-full p-1'><Check size={12} /> </p><li>Reads, edits, and runs your repo directly — locally</li>
           </div>
            <div className='flex gap-2 items-center'>
           <p className='text-green-500 bg-green-950 rounded-full p-1'><Check size={12} /></p>
            <li>Skills you switch on for real mastery</li>
            </div>
            <div className='flex gap-2 items-center'>
           <p className='text-green-500 bg-green-950 rounded-full p-1'><Check size={12} /></p>
            <li>Follows your AGENTS.md conventions</li>
            </div>
            <div className='flex gap-2 items-center'>
           <p className='text-green-500 bg-green-950 rounded-full p-1'><Check size={12} /></p>
            <li>Every command in front of you, expandable</li>
            </div>
        </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Homep4
