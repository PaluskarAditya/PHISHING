import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function Simulation({ level, onBack }) {
  return (
    <div className='h-full flex gap-3'>
      <div className='flex flex-col flex-[3] gap-2 bg-gray-800'>
        <div>
          <img src='/lvl1.png' className='h-3/4 w-full' />
        </div>
      </div>
      <div className='flex-1 bg-gray-800'>

      </div>
    </div>
  );
}
