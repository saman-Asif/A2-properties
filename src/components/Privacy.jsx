import React from 'react'
import Footer from './Footer'
const Privacy = () => {
  return (
    <div>
      <div className='w-full reveal-elements h-auto bg-[#131926] flex flex-col justify-center items-center md:px-16 md:py-16 p-4'>
        <div className='flex flex-col items-start'>
        <span className='text-xs uppercase text-indigo-600'>Legal</span>
        <h1 class="text-3xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
      Privacy
    </h1>
    <p className='text-white/60 text-md max-w-2xl mb-10'>
        Last updated: June 13, 2026
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>1. Overview</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
        This note explains, in plain terms, what EigenMCP handles. EigenMCP is a tool that bridges your LLM provider to a workspace folder on your own machine. It is built to keep your code and data on your machine, under your control.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>2. What we collect</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
     For your account we hold the basics needed to operate the Service: your name, email, optional organization, and the access request you submit. We do not sell your data. Access requests are reviewed by an administrator.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>3. Your code and files stay local</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
     Files, terminal output, and workspace contents are bridged directly between your machine and your chosen LLM provider. EigenMCP does not store your codebase. What the provider does with prompts and outputs is governed by that provider’s own policies.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>4. Your provider</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    When you connect a provider, your prompts and the bridged context are processed by that provider under its own privacy policy and terms. Use EigenMCP only where it is permitted, and review those policies yourself.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>5. Security</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    Credentials live on your machine and are shared between the VS Code extension and the CLI. Every bridged action is confined to the workspace folder you open. You are responsible for safeguarding your Client token.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>6. Changes & contact</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    This note may change as the Service evolves during development. For questions, reach EigenSol via eigensol.com.
    </p>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Privacy
