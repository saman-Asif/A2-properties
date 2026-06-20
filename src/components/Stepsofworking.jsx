import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
const Stepsofworking = () => {
     const data = [
            {
                icon: <Boxes />,
                h1:'Master an unfamiliar codebase',
                p:'Point it at a repo and let it read, map, and explain — then make changes with you watching every step.'
            },
            {
                icon:<Zap />,
                h1:'Build and test an API',
                p:'Scaffold endpoints, run the suite, and iterate against your live workspace.'
            },
            {
                icon:<ShieldCheck />,
                h1:'Cut token costs',
                p:'Trim context automatically so long sessions stay fast and cheap.'
            },
             {
                icon:<ShieldCheck />,
                h1:'Cut token costs',
                p:'Trim context automatically so long sessions stay fast and cheap.'
            },
        ]
  return (
    <div>
       <div className='w-full h-auto  bg-[#0b0f19] md:px-16 md:py-16 p-4'>
              <span className='text-xs uppercase text-indigo-600'>Getting connected</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-10">
            Four steps to your first command
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto'>
              {data.map((item, index)=>(
          <div key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-1.04 hover:shadow-2xl bg-[#131926] border-white/20 rounded-2xl p-4 flex flex-col gap-2'> 
          <div className='flex gap-4'>
          <div>
               <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-11 h-11 rounded-xl flex items-center justify-center mt-2.5'>{item.icon}</div>
               </div>
               <div>
              <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
              <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p>
              </div>
              </div>
              </div>
           ))}
            </div>
            </div>
    </div>
  )
}

export default Stepsofworking
