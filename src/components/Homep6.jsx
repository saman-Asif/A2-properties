import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
const Homep6 = () => {
     const data = [
        {
            icon: <Boxes />,
            span:'Software Skills',
            h1:'Master an unfamiliar codebase',
            p:'Point it at a repo and let it read, map, and explain — then make changes with you watching every step.'
        },
        {
            icon:<Zap />,
            span:'API Development',
            h1:'Build and test an API',
            p:'Scaffold endpoints, run the suite, and iterate against your live workspace.'
        },
        {
            icon:<ShieldCheck />,
            span:'Token-Saver',
            h1:'Cut token costs',
            p:'Trim context automatically so long sessions stay fast and cheap.'
        }
    ]
  return (
    <div>
      <div className='w-full h-auto reveal-elements bg-[#0b0f19] md:px-16 py-16 p-4'>
              <span className='text-xs uppercase text-indigo-600'>Use cases</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-10">
            What you can do with it
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
              {data.map((item, index)=>(
          <div key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-2xl bg-[#131926] border-white/20 rounded-2xl p-4 flex flex-col gap-4'> 
          <div className='flex justify-between items-center'>
               <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center'>{item.icon}</div>
               <span className='text-xs font-semibold tracking-wider text-indigo-600 bg-white border border-indigo-800/40 rounded-full px-3 py-0.5 inline-block'>{item.span}</span>
               </div>
              <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
              <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p>
              </div>
           ))}
            </div>
            <div className='mt-6'>
            <Link className='text-indigo-600 font-semibold hover:text-indigo-700 flex gap-2 items-center' to='/usecases'>Explore use cases <ArrowRight className=' transition-all duration-300 hover:translate-x-1 ' size={15} /></Link>
            </div>
            </div>
    </div>
  )
}

export default Homep6
