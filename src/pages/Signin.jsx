import React from 'react'
import { LogIn,ClipboardCheck } from 'lucide-react';
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div>
      <div className='bg-black w-full min-h-screen flex '>
<div className='bg-[#131926] w-1/2 min-h-screen md:px-20 md:py-20 p-4 flex flex-col justify-center items-center'>
<div className='max-w-md flex flex-col items-start'>
 <img className='object-cover w-35' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" />
 <p className='uppercase text-white/60 tracking-widest text-xs mt-6'>Welcome back</p>
 <h1 className='text-white text-2xl font-semibold mt-2'>Sign in to EigenMCP</h1>
 <p className='text-white/60 text-sm mt-2 mb-6'>Use a demo account or your registered email to open the matching panel.</p>
 <div className='flex flex-col gap-4 w-full max-w-md'>
   <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/10 px-4 py-3 text-sm border text-white/90 border-white/40    rounded-lg focus:border-indigo-600 focus:border-4 outline-none transition-all"
                placeholder="user@eigenmcp.test"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-white mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full text-sm bg-white/10 px-4 py-3 border text-white/90 border-white/40 rounded-lg focus:border-indigo-600 focus:border-4 outline-none transition-all"
                placeholder="Your password"
              />
            </div>
            <button className='text-white text-lg bg-indigo-600 gap-2 w-full flex items-center justify-center py-3 rounded-lg'>  <LogIn size={17} />
Sign In
            </button>
            <Link to='/requestaccess'>
            <button className='text-white transition-colors duration-300 rounded-lg py-3 hover:text-indigo-600 hover:bg-white w-full flex justify-center items-center gap-2'>
             <ClipboardCheck size={17} /> Request access
            </button></Link>
</div>
</div>
</div>
<div className='w-1/2 bg-indigo-600 min-h-screen flex flex-col justify-center items-center md:px-20 md:py-20 p-4'>
<div className='max-w-md flex flex-col items-start gap-4'>
    <span className='text-white text-sm uppercase tracking-wider'>EigenMCP</span>
    <h1 className='text-white text-3xl lg:text-4xl font-bold'>Run MCP workflows from a polished launchpad.</h1>
    <p className='text-white text-md'>Connect your provider, drop in AgentMD instructions, and bridge your machine to any LLM — all from one focused workspace.</p>
<div className='grid grid-cols-2 gap-3'>
    <div className=' text-white text-sm bg-indigo-500 border-indigo-400 border rounded-xl py-4 px-8'>AgentMD workspace</div>
    <div className=' text-white text-sm bg-indigo-500 border-indigo-400 border rounded-xl px-8 py-4'>Desktop MCP client
    </div>
    <div className=' text-white text-sm bg-indigo-500 border-indigo-400 border rounded-xl px-8 py-4'>Skills & tools</div>
    <div className=' text-white text-sm bg-indigo-500 border-indigo-400 border rounded-xl px-8 py-4'>Light / dark themes</div>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Signin
