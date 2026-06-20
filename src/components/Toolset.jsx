import React from 'react'

const Toolset = () => {
    const features = [
        {
            command: 'fs.*',
            description: 'Read, write, and inspect files in the open workspace.',
        },
        {
            command: 'dir.*',
            description: 'List and navigate directories — never outside the jail.',
        },
        {
            command: 'terminal.run / start',
            description: 'Run commands and stream long-running output, live.',
        },
        {
            command: 'skills.list / skills.use',
            description: 'Discover and invoke the skills you switched on.',
        },
        {
            command: 'agents.read',
            description: 'Read your AGENTS.md so the model follows your conventions.',
        },
    ];

    return (
        <>
            <div className='w-full h-auto  bg-[#131926] md:px-16 py-16 md:py-20 border-b border-white/10 p-4'>
                <span className='text-xs uppercase text-indigo-600'>Under the hood</span>
                <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-3 mb-10">
                    A focused, workspace-jailed toolset
                </h1>
                    <div className='border bg-[#0c101a] w-full max-w-7xl overflow-hidden border-white/20 rounded-2xl '>
                    {features.map((feature, index) => (
                        <div key={index} className='grid hover:bg-gray-900/70 grid-cols-[240px_1fr] items-center px-6 py-[18px] border-b border-white/[0.03] last:border-b-0 transition-colors'>
                            <div className='font-mono text-sm font-semibold text-indigo-600'>
                                {feature.command}
                            </div>
                            <div className='text-sm leading-relaxed text-white/50'>
                                {feature.description}
                            </div>
                        </div>
                ))}
        </div>
        </div>
         </>
    )
}

export default Toolset
