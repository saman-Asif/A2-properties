import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck} from 'lucide-react'
const Homep2 = () => {
    const data = [
        {
            icon: <Boxes />,
            h1:'Skills for mastery',
            p:'Switch on skills that turn solid developers into masters — software engineering, API building, token savings, web design, and a growing catalog.'
        },
        {
            icon:<Zap />,
            h1:'Built for speed',
            p:'Skills plus local execution let the model act in your repo directly — far less back-and-forth, faster from idea to working code.'
        },
        {
            icon:<ShieldCheck />,
            h1:'Cloud thinks, code stays local',
            p:'The LLM runs in the cloud; your codebase is managed entirely on your own machine — never uploaded or stored by us.'
        },
        {
            icon:<Eye/>,
            h1:'Full control & visibility',
            p:'See exactly what the model is doing — every command, in front of you. Pick the skills you allow. Stop anytime.'
        }
    ]
  return (
    <div>
      <div className='w-full h-auto bg-[#0b0f19] md:px-16 md:py-16 p-4'>
        <span className='text-xs uppercase text-indigo-600'>Why EigenMCP</span>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-10">
      Skills and speed — with the codebase in your hands
    </h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {data.map((item, index)=>(
    <div key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-2xl bg-[#131926] border-white/20 rounded-2xl p-6 flex flex-col gap-4 '>
        <div className='text-indigo-600 bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center '>{item.icon}</div>
        <h1 className='text-white text-xl font-semibold mt-2'>{item.h1}</h1>
        <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p>
    </div>
     ))}
      </div>
      </div>
    </div>
  )
}

export default Homep2
