import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
import Commandfeatures from '../components/Commandfeatures'
import Toolset from '../components/Toolset'
import Footer from '../components/Footer'
const Features = () => {
   const data = [
          {
              icon: <Boxes />,
              h1:'Software Skills',
              p:'General software engineering — read and navigate the codebase, edit, run, and test toward mastery.'
          },
          {
              icon:<Zap />,
              h1:'Skills for mastery',
              p:'Skills plus local execution let the model act in your repo directly — far less back-and-forth, faster from idea to working code.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Built for speed',
              p:'The LLM runs in the cloud; your codebase is managed entirely on your own machine — never uploaded or stored by us.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Cloud thinks, code stays local',
              p:'See exactly what the model is doing — every command, in front of you. Pick the skills you allow. Stop anytime.'
          }
      ]
  return (
    <div>
       <div className='w-full h-auto bg-[#131926] md:px-16 md:py-20 p-4'>
              <span className='text-xs uppercase text-indigo-600'>Features</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
            Skills, speed, and a codebase that stays yours
          </h1>
          <p className='text-white/60 text-lg max-w-2xl mb-12 md:mb-20'>
            EigenMCP turns any MCP-compatible LLM into a development integration — with the work happening locally and in plain sight.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto'>
              {data.map((item, index)=>(
          <div key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-2xl bg-[#0c101a] border-white/20 rounded-2xl p-4 flex flex-col gap-2 '> 
               <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-10 h-10 rounded-xl flex items-center justify-center'>{item.icon}</div>
              <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
              <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p></div>
           ))}
            </div>
          </div>
          <Commandfeatures/>
          <Toolset/>
          <Footer/>
    </div>
  )
}

export default Features
