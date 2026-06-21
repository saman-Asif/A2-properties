import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react';
import Herobox from '../components/Herobox';
import Homep2 from '../components/Homep2';
import Homep3 from '../components/Homep3';
import Homep4 from '../components/Homep4';
import Homep5 from '../components/Homep5';
import Homep6 from '../components/Homep6';
import Homep7 from '../components/Homep7';
import Homep8 from '../components/Homep8';
import Homep9 from '../components/Homep9';
import Homep10 from '../components/Homep10';
import Footer from '../components/Footer';
import Homepricing from '../components/Homepricing';
import FadeInUp from '../components/FadeInUp.jsx';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
  <section class="relative w-full h-auto bg-[#0b0f19] text-white p-4 md:px-12 py-24 overflow-hidden flex flex-col">
  <div class="absolute top-0 left-0 right-0 w-full h-90 bg-gradient-to-b from-indigo-500/30 via-purple-500/10 to-transparent blur-[100px] pointer-events-none z-10"></div>
  <div class="relative z-10 max-w-3xl text-left">
    <FadeInUp delay={0.2}>
    <span class="flex gap-2 items-center justify-center text-xs font-semibold tracking-wider text-indigo-600 bg-white border md:w-85 border-indigo-800/40 rounded-full py-0.5 mb-6">
     <Sparkles size={14} /> MCP INTEGRATION • BRING YOUR OWN LLM
    </span></FadeInUp>
    <FadeInUp delay={0.2} >
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
      Turn any LLM into mastery over your codebase.
    </h1></FadeInUp>
    <FadeInUp delay={0.2}>
    <p class="text-gray-400 text-lg max-w-2xl mb-6">
      EigenMCP plugs your own LLM provider into your machine over MCP. The model thinks in the cloud; your codebase is read, edited, and run entirely on your machine. Switch on the skills you need, watch every command as it happens, and stop anytime — you stay in control.
    </p></FadeInUp>
    <FadeInUp delay={0.2}>
    <div className='flex flex-col items-start w-full md:flex-row gap-3'>
        <Link to='/requestaccess'>
    <button className='bg-indigo-600 flex items-center justify-center font-bold hover:bg-indigo-700 text-[#181818D9] px-5.5 w-fit py-2.5 rounded-md gap-2'>
  Request Access
  <ArrowRight size={18} />
</button></Link>
<Link to='howitworks'>
<button className='text-white border border-white/60 px-5.5 py-2.5 rounded-md  hover:border-indigo-600 transition-colors w-fit duration-300 ease-in-out hover:text-indigo-600'>
    See how it works
</button></Link>
</div>
<p className='text-gray-400 text-sm max-w-xl mt-6 mb-6'> 
In active development — early access is admin-granted, free. EigenMCP is a tool. Use it only on platforms that permit connecting external tools, and follow your provider’s terms — you’re responsible for that.
</p></FadeInUp>
  </div>
</section>
<Herobox/>
<Homep2/>
<Homep3/>
<Homep4/>
<Homep5/>
<Homep6/>
<Homep7/>
<Homep8/>
<Homep9/>
<Homepricing/>
<Homep10/>
<Footer/>
    </>
  )
}

export default Home
