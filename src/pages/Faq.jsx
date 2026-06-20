import React,{ useState } from 'react'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Box from '../components/Box';
import Footer from '../components/Footer';
const Faq = () => {
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
  },
  {
    question: "How do I connect?",
    answer: "Install the CLI or the VS Code extension, sign in, copy your single Client token, authorize your provider, open a folder, and start. The same token works for both clients."
  },
  {
    question: "Is it safe?",
    answer: "Every file and terminal action is jailed to the folder you open. Credentials live on your machine, and one account connects one client at a time."
  },
  {
    question: "How much does it costs?",
    answer: "EigenMCP is in active development. Access is currently granted by an admin and is free; plans and pricing will be shared soon."
  },
];
const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <div>
       <div className='w-full h-auto  bg-[#131926] md:px-16 py-16 md:py-20 p-4'>
              <span className='text-xs uppercase text-indigo-600'>FAQ</span>
              <h1 class="text-4xl max-w-2xl md:text-5xl text-white font-bold tracking-tight mt-3 mb-4">
            Questions, answered
          </h1>
           <p className='text-white/60 text-lg max-w-2xl mb-12 md:mb-20'>
              What EigenMCP is, what it does with your code, and how you stay in control.
          </p>
           <div className=" gap-3 grid md:grid-cols-2 justify-center items-center">
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
          </div>
          </div>
           <Box />
           <Footer/>
          </>
  )
}

export default Faq
