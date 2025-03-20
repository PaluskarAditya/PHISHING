import { PlayCircleIcon } from 'lucide-react'
import React from 'react'

export default function VideoCard() {
  return (
    <div className="bg-white cursor-pointer flex flex-col rounded-lg shadow-lg hover:shadow-cyan-900 transition-all">
      <img src="/pfp.jpg" alt="thumbnail" className="w-full h-auto rounded-t-lg" />
      <div className="flex gap-2 p-2">
        <div className='flex flex-col gap-1'>
          <h1 className="text-black font-bold tracking-widest">Ethical Hacking</h1>
          <p className='text-black text-xs tracking-widest'>this is a basic course</p>
        </div>
      </div>
    </div>
  )
}
