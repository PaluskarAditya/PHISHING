import React from 'react'

export default function GameHub({ setMode }) {
  return (
    <div className='flex flex-col gap-5 h-full bg-gray-800 p-3 rounded-lg'>
      <div className='grid grid-cols-3 gap-5 tracking-widest'>
        <div onClick={() => setMode('CTF')} className='border-2 cursor-pointer text-white border-pink-400 hover:bg-pink-400 shadow-lg hover:shadow-pink-900 transition-all p-5 flex flex-col gap-3 rounded-lg group'>
          <h1 className='text-5xl'>CTF</h1>
          <p className='text-xs text-gray-500 transition-all group-hover:text-white'>
            <b>CTF (Capture The Flag)</b> is a cybersecurity challenge where players solve security-related puzzles, exploit vulnerabilities, and analyze threats to complete objectives. It helps improve hacking, forensics, and cybersecurity skills in a hands-on way. 🚀🔐
          </p>
        </div>
        <div onClick={() => setMode('QUIZZ')} className='border-2 cursor-pointer text-white border-cyan-400 hover:bg-cyan-400 shadow-lg hover:shadow-cyan-900 transition-all p-5 flex flex-col gap-3 rounded-lg group'>
          <h1 className='text-5xl'>QUIZ</h1>
          <p className='text-xs text-gray-500 transition-all group-hover:text-white'>
            <b>Cybersecurity quizzes</b> test your knowledge on security concepts, real-world threats, and best practices. They help reinforce learning, improve awareness, and keep you updated on the latest cyber risks in an interactive way. 🧠🔐
          </p>
        </div>
        <div onClick={() => setMode('MISSON')} className='border-2 cursor-pointer text-white border-pink-400 hover:bg-pink-400 shadow-lg hover:shadow-pink-900 transition-all p-5 flex flex-col gap-3 rounded-lg group'>
          <h1 className='text-5xl'>MISSION</h1>
          <p className='text-xs text-gray-500 transition-all group-hover:text-white'>
            <b>Missions</b> are interactive cybersecurity challenges where users analyze websites to identify red flags, phishing attempts, and security risks. These hands-on exercises enhance threat detection skills and improve awareness of real-world cyber threats. 🌐🔍🚨
          </p>
        </div>
      </div>
      <div className='flex border-2 border-purple-400 rounded-lg overflow-scroll flex-col gap-2 p-3 text-white tracking-widest h-full'>
        <h1>Tournaments</h1>
        <div className='flex flex-col'>
          <div className='text-xs p-3 hover:bg-purple-900 transition-all cursor-pointer border-b-2 border-purple-900'>CyberSecurity Hackathon</div>
          <div className='text-xs p-3 hover:bg-purple-900 transition-all cursor-pointer border-b-2 border-purple-900'>CyberSecurity Hackathon</div>
          <div className='text-xs p-3 hover:bg-purple-900 transition-all cursor-pointer border-b-2 border-purple-900'>CyberSecurity Hackathon</div>
        </div>
      </div>
    </div>
  )
}
