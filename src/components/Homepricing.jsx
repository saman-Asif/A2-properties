import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
const Homepricing = () => {
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
      <div className='relative reveal-elements w-full h-auto  bg-[#0b0f19] md:px-16 py-16 md:py-20 flex flex-col justify-center items-center p-4'>
              <span className='text-xs uppercase text-indigo-600'>Pricing</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-8">
            Plans are on the way
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
        {data.map((item, index)=>(
    <div key={index} className='border bg-[#0c101a] border-white/20 rounded-2xl p-4 flex flex-col gap-4 '> 
         <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-12 h-12 mt-2 rounded-xl flex items-center justify-center'>{item.icon}</div>
        <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
        <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p></div>
     ))}
     </div>
            {/* Blurred Semi-Transparent Overlay */}
      <div className="absolute top-40 md:top-45 p-4 inset-0 z-80 flex items-center justify-center bg-gray-950/30 backdrop-blur-sm">
        {/* Call to Action Container */}
        <div className="flex flex-col items-center p-8 bg-white/1 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl text-center">
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
    </div>
  )
}

export default Homepricing
