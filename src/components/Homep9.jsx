import React, { useState } from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Homep9 = () => {
   const faqs = [
  {
    question: "What is the Model Context Protocol (MCP)?",
    answer: "MCP is an open standard that enables developers to build secure, two-way connections between their AI-powered tools and data sources."
  },
  {
    question: "How does MCP work?",
    answer: "It consists of a client (like an AI assistant) and a server (the data source). They communicate over standardized JSON-RPC protocols, allowing the AI to query, read, or write to the server."
  },
  {
    question: "Is MCP open source?",
    answer: "Yes, MCP is an open standard. The specifications, client implementations, and server libraries are freely available for developers to build upon."
  },
  {
    question: "How do I stay in control?",
    answer: "You choose which skills are active, you watch every command as it runs (open any one for its details), and you can stop the session at any time."
  },
  {
    question: "Do you store my code?",
    answer: "No. Your codebase is read, edited, and run entirely on your machine. EigenMCP bridges the actions; it does not upload or store your files."
  }
];
const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className='w-full reveal-elements h-auto  bg-[#131926] md:px-16 py-16 p-4'>
        <span className='text-xs uppercase text-indigo-600'>FAQ</span>
        <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-4 mb-8">
      Good questions to ask
    </h1>
     <div className="space-y-4 flex flex-col justify-center items-center">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border border-slate-800 rounded-2xl bg-[#131926] backdrop-blur-sm overflow-hidden duration-300 bg-opacity-100 hover:bg-[#171f2e] max-w-2xl transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                >
                  <span className="font-medium text-base sm:text-lg text-slate-100">
                    {faq.question}
                  </span>
                  <span className={`text-slate-400 border active:text-indigo-600 shrink-0 active:bg-indigo-500/10 active:border-indigo-600 border-white/30 p-1.5 rounded-full transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-sm pt-0 text-slate-400 leading-relaxed bg-[#131926]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='mt-6 xl:pl-70'>
            <Link className='text-indigo-600 font-semibold hover:text-indigo-700 flex gap-2 items-center' to='/faq'>Read all FAQs <ArrowRight className=' transition-all duration-300 hover:translate-x-1 ' size={15} /></Link>
            </div>
    </div>
    </div>
  )
}

export default Homep9
