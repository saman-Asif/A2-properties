import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
import Stepsofworking from '../components/Stepsofworking'
import Toolset from '../components/Toolset'
import Commandbox from '../components/Commandbox'
import Footer from '../components/Footer'
const Howitworks = () => {
  const data = [
          {
              icon: <Boxes />,
              h1:'Your LLM, in the cloud',
              p:'Any MCP-compatible provider — including custom or self-hosted models on your own GPUs — connects over MCP + OAuth.'
          },
          {
              icon:<Zap />,
              h1:'EigenMCP bridges it',
              p:'It authorizes the session and opens a secure channel to your machine, turning a chat model into a development integration.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Your machine runs it',
              p:'Files and commands execute locally, jailed to the folder you open. Your code never leaves your machine.'
          }
      ]
  return (
    <div>
       <div className='w-full h-auto  bg-[#131926] md:px-16 md:py-16 p-4'>
        <span className='text-xs uppercase text-indigo-600'>How it works
</span>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
      A chat model, turned into a development integration
    </h1>
    <p className='text-white/60 text-lg max-w-2xl mb-12 md:mb-20'>
        The model thinks in the cloud over MCP; EigenMCP runs its intentions on your machine — locally, jailed, and in plain sight.
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {data.map((item, index)=>(
    <div key={index} className='border bg-[#0c101a] border-white/20 rounded-2xl p-4 flex flex-col gap-4 '> 
         <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-12 h-12 mt-2 rounded-xl flex items-center justify-center'>{item.icon}</div>
        <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
        <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p></div>
     ))}
      </div>
    </div>
    <Stepsofworking/>
    <Toolset/>
    <Commandbox/>
    <Footer/>
    </div>
  )
}

export default Howitworks
