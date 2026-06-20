import React from 'react'
import { Check, ChevronDown, ChevronRight, Terminal, FileCode, Eye, List, Cpu } from "lucide-react";
import { useState } from 'react';
const Commandbox = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const toggleSection = (sectionName) => {
        setExpandedSection(expandedSection === sectionName ? null : sectionName);
    }
    return (
        <div>
            <div className='w-full h-auto bg-[#0b0f19] md:px-16 md:py-20 p-4'>
                <span className='text-xs uppercase text-indigo-600'>Stay in control</span>
                <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-10">
                    Watch every command. Nothing hidden.
                </h1>
                <div className='flex items-center justify-center mb-13'>
                    <div className='w-1/2'>
                        <ul className='text-white flex flex-col gap-4 max-w-xl'>
                            <div className='flex gap-2'>
                                <p className='text-indigo-600 bg-indigo-500/10 h-6 w-6 rounded-full flex items-center justify-center '><Check size={14} /> </p> <li>The commands the model runs — directly, as a clean stream.</li>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-indigo-600 bg-indigo-500/10 h-6 w-6 rounded-full flex items-center justify-center '><Check size={14} /> </p><li>Open any command to see its details; skip the walls of messages and plans.</li>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-indigo-600 bg-indigo-500/10 h-6 w-6 rounded-full flex items-center justify-center '><Check size={14} /> </p><li>The whole picture in a single glance.</li>
                            </div>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <div className="w-full max-w-2xl bg-[#0d1117]/90 text-zinc-300 font-sans rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md">
                            {/* Header Section */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-sm font-medium text-white">Live activity</span>
                                </div>
                                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Commands</span>
                            </div>
                            {/* Activities / Logs List */}
                            <div className="divide-y divide-white/5">
                                {/* Item 1: npm test (Expandable Terminal Output) */}
                                <div className="bg-white/[0.01]">
                                    <button
                                        onClick={() => toggleSection('npm-test')}
                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors font-mono text-xs sm:text-sm"
                                    >
                                        <div className="flex items-center gap-3 text-zinc-100">
                                            {expandedSection === 'npm-test' ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
                                            <Terminal size={16} className="text-indigo-600" />
                                            <span className=" text-white">$ npm test</span>
                                        </div>
                                        <div className="text-zinc-500 font-mono text-xs flex gap-2">
                                            <span className="text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">exit 0</span>
                                            <span>2.1s</span>
                                        </div>
                                    </button>
                                    {/* Collapsible Log Content */}
                                    {expandedSection === 'npm-test' && (
                                        <div className="px-11 pb-4 pt-1 text-xs text-zinc-400 font-mono border-t border-white/[0.02] bg-black/20">
                                            <p className="leading-relaxed">
                                                42 passing. Output streamed back as it ran — expand to read the full log, or leave it collapsed.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {/* Item 2: Edit File */}

                                <div className="bg-white/[0.01]">
                                    <button
                                        onClick={() => toggleSection('edit-file')}
                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors font-mono text-xs sm:text-sm">
                                        <div className="flex items-center gap-3">
                                            {expandedSection === 'edit-file' ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
                                            <FileCode size={16} className="text-indigo-600" />
                                            <span className="text-zinc-200">edit src/auth/login.ts</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-500">+14 -3</span>
                                        </div>
                                    </button>
                                    {/* Collapsible Log Content */}
                                    {expandedSection === 'edit-file' && (
                                        <div className="px-11 pb-4 pt-1 text-xs text-zinc-400 font-mono border-t border-white/[0.02] bg-black/20">
                                            <p className="leading-relaxed">
                                                A focused diff. The command line is the summary; open it only when you want the exact edit.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {/* Item 3: Read File */}
                                <div className='bg-white/[0.01]'>
                                    <button
                                        onClick={() => toggleSection('read-src')}
                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors font-mono text-xs sm:text-sm">
                                        <div className="flex items-center gap-3">
                                            {expandedSection === 'read-src' ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
                                            <Eye size={16} className="text-indigo-600" />
                                            <span className="text-zinc-200">read src/server.ts</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-500">184 lines</span>
                                        </div>
                                    </button>
                                    {/* Collapsible Log Content */}
                                    {expandedSection === 'read-src' && (
                                        <div className="px-11 pb-4 pt-1 text-xs text-zinc-400 font-mono border-t border-white/[0.02] bg-black/20">
                                            <p className="leading-relaxed">
                                                The model read the file before touching it. You see that it happened — no wall of text to scroll.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {/* Item 4: List Routes */}
                                <div className='bg-white/[0.01]'>
                                    <button
                                        onClick={() => toggleSection('list')}
                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors font-mono text-xs sm:text-sm">
                                        <div className="flex items-center gap-3">
                                            {expandedSection === 'list' ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
                                            <List size={16} className="text-indigo-600" />
                                            <span className="text-zinc-400">list</span>
                                            <span className="text-zinc-200">src/routes</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-500">7 entries</span>
                                        </div>
                                    </button>
                                    {/* Collapsible Log Content */}
                                    {expandedSection === 'list' && (
                                        <div className="px-11 pb-4 pt-1 text-xs text-zinc-400 font-mono border-t border-white/[0.02] bg-black/20">
                                            <p className="leading-relaxed">
                                                The model read the file before touching it. You see that it happened — no wall of text to scroll.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {/* Item 5: Skill Status */}
                                <div className='bg-white/[0.01]'>
                                    <button
                                        onClick={() => toggleSection('skill')}
                                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors font-mono text-xs sm:text-sm">
                                        <div className="flex items-center gap-3">
                                            {expandedSection === 'skill' ? <ChevronDown size={16} className="text-zinc-500" /> : <ChevronRight size={16} className="text-zinc-500" />}
                                            <Cpu size={16} className="text-indigo-600" />
                                            <span className="text-zinc-400">skill</span>
                                            <span className="text-zinc-500">•</span>
                                            <span className="text-zinc-200 font-sans">API Development</span>
                                        </div>
                                        <div>
                                            <span className="text-xs text-zinc-500 px-2 py-0.5 rounded-full font-sans text-[11px] font-medium tracking-wide">
                                                active
                                            </span>
                                        </div>
                                    </button>
                                    {/* Collapsible Log Content */}
                                    {expandedSection === 'skill' && (
                                        <div className="px-11 pb-4 pt-1 text-xs text-zinc-400 font-mono border-t border-white/[0.02] bg-black/20">
                                            <p className="leading-relaxed">
                                                The model read the file before touching it. You see that it happened — no wall of text to scroll.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-black font-medium rounded-lg shadow-lg transition-colors duration-300">
            Request Access
          </button>
            </div>
        </div>
    )
}

export default Commandbox
