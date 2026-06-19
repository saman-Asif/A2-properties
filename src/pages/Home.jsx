import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react';
import Herobox from '../components/Herobox';
import Homep2 from '../components/Homep2';
import Homep3 from '../components/Homep3';
import Homep4 from '../components/Homep4';
import Homep5 from '../components/Homep5';
const Home = () => {
  return (
    <>
  <section class="relative w-full min-h-screen bg-[#0b0f19] text-white px-12 py-24 overflow-hidden flex flex-col">
  <div class="absolute top-0 left-0 right-0 w-full h-90 bg-gradient-to-b from-indigo-500/30 via-purple-500/10 to-transparent blur-[100px] pointer-events-none z-10"></div>
  <div class="relative z-10 max-w-3xl text-left">
    <span class="flex gap-2 items-center justify-center text-xs font-semibold tracking-wider text-indigo-600 bg-white border w-85 border-indigo-800/40 rounded-full py-0.5 mb-6">
     <Sparkles size={14} /> MCP INTEGRATION • BRING YOUR OWN LLM
    </span>
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
      Turn any LLM into mastery over your codebase.
    </h1>
    <p class="text-gray-400 text-lg max-w-2xl mb-6">
      EigenMCP plugs your own LLM provider into your machine over MCP. The model thinks in the cloud; your codebase is read, edited, and run entirely on your machine. Switch on the skills you need, watch every command as it happens, and stop anytime — you stay in control.
    </p>
    <div className='flex gap-3'>
    <button className='bg-indigo-600 flex items-center justify-center font-bold hover:bg-indigo-700 text-[#181818D9] px-5.5 py-2.5 rounded-md gap-2'>
  Request Access
  <ArrowRight size={18} />
</button>
<button className='text-white border border-white/60 px-5.5 py-2.5 rounded-md  hover:border-indigo-600     transition-colors duration-300 ease-in-out hover:text-indigo-600'>
    See how it works
</button>
</div>
<p className='text-gray-400 text-sm max-w-xl mt-6 mb-6'> 
In active development — early access is admin-granted, free. EigenMCP is a tool. Use it only on platforms that permit connecting external tools, and follow your provider’s terms — you’re responsible for that.
</p>
  </div>
</section>
<Herobox/>
<Homep2/>
<Homep3/>
<Homep4/>
<Homep5/>
    </>
  )
}

export default Home
