import React, { useState } from 'react';
import { Menu, X, Video, FileText, User } from 'lucide-react';

export default function EducationSidebar({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`
        flex flex-col gap-3 p-3 bg-gray-800 text-white font-light shadow-lg transition-all duration-300 
        ${isOpen ? 'w-1/5' : 'w-15'}
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 w-max bg-gray-700 rounded-md hover:bg-gray-600 transition-all'
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <ul className='list-none flex flex-col gap-3 mt-3'>
        <li onClick={() => setActiveTab('video')} className='flex items-center gap-2 bg-cyan-400 cursor-pointer text-sm p-2 shadow-lg transition-all hover:shadow-cyan-900 rounded-md tracking-widest'>
          {isOpen ? 'Videos' : <Video size={20} />}
        </li>
        <li onClick={() => setActiveTab('blog')} className='flex items-center gap-2 bg-pink-400 cursor-pointer text-sm p-2 shadow-lg transition-all hover:shadow-pink-900 rounded-md tracking-widest'>
          {isOpen ? 'Blog' : <FileText size={20} />}
        </li>
        <li onClick={() => setActiveTab('profile')} className='flex items-center gap-2 bg-red-400 cursor-pointer text-sm p-2 shadow-lg transition-all hover:shadow-red-900 rounded-md tracking-widest'>
          {isOpen ? 'Profile' : <User size={20} />}
        </li>
      </ul>
    </nav>
  );
}
