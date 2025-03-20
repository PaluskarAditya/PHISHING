import React from 'react'
import VideoCard from './VideoCard'

export default function Video() {
  return (
    <div className='bg-gray-800 h-full p-3 flex flex-col gap-3 '>
      <h1 className='tracking-widest text-xl'>Videos</h1>
      <div className='grid grid-cols-4 gap-3'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  )
}
