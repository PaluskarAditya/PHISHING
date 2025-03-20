import React from 'react';

export default function Profile() {
  return (
    <div className='h-full bg-gray-800 p-3 flex flex-col gap-4'>
      <h1 className='text-xl tracking-widest text-white'>Profile</h1>
      <div className='flex gap-5'>
        <div className='h-50 w-50 rounded-lg'>
          <img
            src="https://github.com/shadcn.png"
            className='rounded-lg shadow-lg shadow-pink-900'
            alt="profile"
          />
        </div>
        <div className='grid grid-cols-2 gap-x-5 -gap-y-10'>
          <div className='flex flex-col gap-1'>
            <p className='tracking-widest text-pink-400 text-sm'>Name</p>
            <input
              className='border-2 tracking-widest font-thin text-lg shadow-lg hover:shadow-pink-900 transition-all border-pink-400 focus:outline-none p-1 px-2 placeholder:text-pink-600'
              placeholder='John Doe'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='tracking-widest text-pink-400 text-sm'>Username</p>
            <input
              className='border-2 tracking-widest font-thin text-lg shadow-lg hover:shadow-pink-900 transition-all border-pink-400 focus:outline-none p-1 px-2 placeholder:text-pink-600'
              placeholder='john.doe'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='tracking-widest text-pink-400 text-sm'>Email</p>
            <input
              className='border-2 tracking-widest font-thin text-lg shadow-lg hover:shadow-pink-900 transition-all border-pink-400 focus:outline-none p-1 px-2 placeholder:text-pink-600'
              placeholder='john@example.com'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='tracking-widest text-pink-400 text-sm'>Phone</p>
            <input
              className='border-2 tracking-widest font-thin text-lg shadow-lg hover:shadow-pink-900 transition-all border-pink-400 focus:outline-none p-1 px-2 placeholder:text-pink-600'
              placeholder='+1234567890'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-3'>
        <h1 className='text-xl tracking-widest'>Badges</h1>
        <div className='grid grid-cols-5 gap-x-3'>
          <div className='p-4 shadow-lg hover:shadow-pink-900 transition-all border-2 border-pink-400 rounded-lg'>
            <p className='tracking-widest font-thin text-sm text-cyan-400'>achievement badge</p>
          </div>
        </div>
      </div>
    </div>
  );
}
