import React from 'react'
import { Dot, ClipboardCheck } from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
const Requestaccess = () => {
  return (
    <>
    <div className='bg-[#0b0f19] w-full h-auto flex flex-col md:flex-row'>
        <div className='w-full lg:w-1/2 md:px-20 md:py-25 p-4 py-16 flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-5'>
        <span className='text-indigo-600 tracking-widest uppercase text-xs'>Request access</span>
        <h1 className='md:text-4xl text-3xl text-white font-bold'>Get early access to EigenMCP</h1>
        <p className='text-white/70'>EigenMCP is in active development. Access is currently granted by an admin — tell us a little about you and we'll reach out.</p>
        <ul className='text-white'>
            <li className='flex items-center gap-2'><Dot size={40} className='text-indigo-600' />
                Free during the development phase
            </li>
            <li className='flex items-center gap-2'><Dot size={45} className='text-indigo-600' /> Bring any MCP-compatible provider — including custom or self-hosted models</li>
            <li className='flex items-center gap-2'><Dot  size={40} className='text-indigo-600' /> Your code stays local; you watch every command</li>
            <li className='flex items-center gap-2'><Dot size={40} className='text-indigo-600' /> Workspace-jailed, one client at a time, stop anytime</li>
        </ul>
        </div>
        </div>
        
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center md:py-20 py-15 p-4'>
<div className='bg-[#131926] mb-6 rounded-2xl border p-6 border-white/40 w-full h-full space-y-6 '>
 <div>
              <label className="block text-sm font-medium text-white mt-4 mb-1">Name</label>
              <input
                type="name"
                name="name"
                required
                className="w-full px-4 py-3 text-sm border text-white/90 border-white/40    rounded-lg focus:border-indigo-600 focus:border-4 outline-none transition-all"
                placeholder="Ada Lovelace"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 text-sm border text-white/90 border-white/40    rounded-lg focus:border-indigo-600 focus:border-4 outline-none transition-all"
                placeholder="you@company.com"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-white mb-1">Organization (optional)</label>
              <input
                type="text"
                name="text"
                className="w-full px-4 py-3 text-sm border text-white/90 border-white/40    rounded-lg focus:border-indigo-600 focus:border-4 outline-none transition-all"
                placeholder="Acme Inc."
              />
            </div>
             <div>
            <label className="block text-sm font-medium text-white mb-1">What do you want to use EigenMCP for?</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full text-sm px-4 py-3 text-white/90 border-white/40  border rounded-lg focus:border-indigo-600 focus:border-4  outline-none transition-all resize-none"
              placeholder="Tell us about your codebase, your provider and what you are hopping to do."
            ></textarea>
          </div>
          <Link to='/requestaccess'>
            <button className='text-black text-lg bg-indigo-600 gap-2 w-full flex items-center justify-center py-3 rounded-lg'>
             Request access
            </button></Link>
</div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Requestaccess
