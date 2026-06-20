import React from 'react'
import {Eye, Boxes ,Zap, ShieldCheck, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'
import Skillsbox from '../components/Skillsbox'
import Footer from '../components/Footer'
const Skills = () => {
  const data = [
          {
              icon: <Boxes />,
              h1:'Software Skills',
              p:'General software engineering — read and navigate the codebase, edit, run, and test toward mastery.'
          },
          {
              icon:<Zap />,
              h1:'API Development',
              p:'Design, build, and exercise APIs against your live workspace.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Token-Saver',
              p:'Work in fewer tokens with smart context trimming — cut cost and latency.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Token-Saver',
              p:'Work in fewer tokens with smart context trimming — cut cost and latency.'
          },
          {
              icon:<ShieldCheck />,
              h1:'Token-Saver',
              p:'Work in fewer tokens with smart context trimming — cut cost and latency.'
          },
      ]
  return (
    <div>
       <div className='w-full h-auto bg-[#131926] md:px-16 md:py-16 p-4'>
              <span className='text-xs uppercase text-indigo-600'>Skills</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
            Skills that build real mastery
          </h1>
          <p className='text-white/60 text-lg max-w-2xl mb-12 md:mb-20'>
              EigenMCP ships with a growing catalog of skills. Switch on the ones you want and the model uses them through the bridge — nothing more, nothing less. Turn one off and it's gone.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
              {data.map((item, index)=>(
          <div key={index} className='border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-2xl bg-[#0c101a] border-white/20 rounded-2xl p-4 flex flex-col gap-4 '> 
               <div className='text-indigo-600 shrink-0 bg-indigo-500/10 w-10 h-10 rounded-xl flex items-center justify-center'>{item.icon}</div>
              <h1 className='text-white text-lg font-semibold mt-2'>{item.h1}</h1>
              <p className='text-sm text-white/60 font-light leading-relaxed'>{item.p}</p></div>
           ))}
            </div>
          </div>
          <Skillsbox/>
          <Footer/>
          </div>
  )
}

export default Skills
