import React from 'react'

export default function Blog() {
  return (
    <div className='bg-gray-800 h-full p-3 flex flex-col gap-5'>
      <h1 className='text-xl tracking-widest'>Blogs</h1>
      <div className='grid grid-cols-3 gap-5'>
        <div className='flex flex-col shadow-lg hover:shadow-pink-900 transition-all'>
          <img src='/pfp.jpg' alt='blog' className='rounded-t-lg' />
          <div className='text-white border-8 bg-white flex flex-col gap-2 border-cyan-400 p-3 rounded-b-lg'>
            <h1 className='text-xl tracking-widest text-black font-bold'>Homograph Attacks</h1>
            <p className='text-sm tracking-widest text-gray-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, saepe!
            </p>
          </div>
        </div>
        <div className='flex flex-col shadow-lg hover:shadow-pink-900 transition-all'>
          <img src='/pfp.jpg' alt='blog' className='rounded-t-lg' />
          <div className='text-white border-8 bg-white flex flex-col gap-2 border-cyan-400 p-3 rounded-b-lg'>
            <h1 className='text-xl tracking-widest text-black font-bold'>Homograph Attacks</h1>
            <p className='text-sm tracking-widest text-gray-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, saepe!
            </p>
          </div>
        </div>
        <div className='flex flex-col shadow-lg hover:shadow-pink-900 transition-all'>
          <img src='/pfp.jpg' alt='blog' className='rounded-t-lg' />
          <div className='text-white border-8 bg-white flex flex-col gap-2 border-cyan-400 p-3 rounded-b-lg'>
            <h1 className='text-xl tracking-widest text-black font-bold'>Homograph Attacks</h1>
            <p className='text-sm tracking-widest text-gray-700'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
