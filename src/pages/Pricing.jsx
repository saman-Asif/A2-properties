import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const Pricing = () => {
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
      <div className='w-full reveal-elements min-h-screen bg-[#0b0f19] md:px-16 py-16 md:py-20 p-4'>
              <span className='text-xs uppercase text-indigo-600'>Pricing</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
            Pricing is launching soon
          </h1>
          <p className='text-white/60 text-lg max-w-2xl mb-12 md:mb-20'>
            We're still in active development. Plans and features will be shared soon — for now, access is free and granted by an admin.
          </p>
          <div className='relative blur-sm select-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {data.map((item, index)=>(
    <div key={index} className='border bg-[#0c101a] border-white/20 rounded-2xl p-4 flex flex-col gap-4 '> 
         <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-12 h-12 mt-2 rounded-xl flex items-center justify-center'>{item.icon}</div>
        <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
        <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p></div>
     ))}
     </div>
            {/* Blurred Semi-Transparent Overlay */}
      <div className="absolute top-95 inset-0 md:top-80 z-80 p-6 flex items-center justify-center bg-gray-950/30 backdrop-blur-sm">
        {/* Call to Action Container */}
        <div className="flex max-w-sm flex-col items-center p-8 bg-white/1 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">Launching soon</h2>
          <p className="text-gray-200 text-sm mb-6 max-w-xs">
          EigenMCP is in active development — plans and features will be shared soon. Request access to get started now, free, while we finish building.
          </p>
          <Link to='/requestaccess'>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-black font-medium rounded-lg shadow-lg transition-colors duration-300">
            Request Access
          </button></Link>
        </div>
      </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Pricing
