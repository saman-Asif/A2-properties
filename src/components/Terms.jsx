import React from 'react'
import Footer from './Footer'

const Terms = () => {
  return (
    <>
       <div className='w-full h-auto bg-[#131926] md:px-16 md:py-16 p-4'>
        <div className='flex flex-col'>
        <span className='text-xs uppercase text-indigo-600'>Legal</span>
        <h1 class="text-3xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-4">
      Terms & Conditions
    </h1>
    <p className='text-white/60 text-md max-w-2xl mb-10'>
        Last updated: June 13, 2026
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>1. Acceptance of these Terms</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
        By requesting access to, connecting, or using EigenMCP ("the Service"), you agree to these Terms & Conditions. If you do not agree, do not use the Service. You confirm you have the authority to accept these terms for yourself and any organization you represent.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>2. Changes to these Terms</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
     These Terms may change at any time, without prior notice. The current version always governs your use of the Service. Your continued use after any change constitutes acceptance of the updated Terms, and you are responsible for reviewing them periodically. You are at all times deemed to comply with the then-current Terms.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>3. Nature of the Service</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
     EigenMCP is a tool that bridges a large language model ("LLM") provider and your own machine, allowing your assistant to read and write files, run commands, and use selectable skills within a workspace folder you choose. EigenMCP does not control, operate, or endorse any LLM provider, nor the output any model generates.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>4. No Responsibility for Your Data</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
     We are not responsible for any data — including your code, files, prompts, commands, outputs, or anything that passes through the bridge or your workspace. You are solely responsible for the data you expose, the actions you allow, and the commands that run on your machine. Do not connect workspaces, secrets, or data you are not authorized to use.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>5. Your Provider, Your Responsibility</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    You must independently review and comply with the terms, policies, acceptable-use rules, and usage limits of any LLM provider you connect, and use EigenMCP only on platforms that permit connecting external tools. EigenMCP is not a party to your relationship with any provider and is not responsible for provider availability, billing, or decisions.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>6. Acceptable Use</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    You agree to use the Service only for lawful, good-faith purposes. You will not use it for any illegal, harmful, abusive, infringing, or deceptive activity, nor to bypass security controls or harm others. You may connect one account and one client at a time. We may suspend or terminate access that violates these Terms.
    </p>
     <h2 className='text-white font-bold text-lg mb-4'>7. Accounts & Access</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    Access is currently granted by an administrator during the development phase. You are responsible for safeguarding your Client token and any credentials. Accounts may be paused or deleted at our discretion, including for inactivity, abuse, or to protect the Service.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>8. Development Status</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    The Service is in active development. Features, availability, and pricing may change, be limited, or be withdrawn at any time. The Service is provided without any service-level agreement, uptime guarantee, or commitment of continued availability.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>9. Disclaimer & Limitation of Liability</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    The Service is provided "as is" and "as available", without warranties of any kind, express or implied. To the maximum extent permitted by law, EigenSol and EigenMCP shall not be liable for any indirect, incidental, special, or consequential damages, nor for any loss of data, code, profits, or downtime arising from your use of the Service.
    </p>
    <h2 className='text-white font-bold text-lg mb-4'>10. Termination</h2>
    <p className='text-white/60 text-md max-w-2xl mb-7'>
    You may stop using the Service at any time by disconnecting your client. We may suspend or terminate your access at any time, with or without notice, for any reason, including violation of these Terms. Sections that by their nature should survive termination will survive.
    </p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Terms
