import React, { useState } from 'react';
import Simulation from './Simulation'; // Import your Simulation component

export default function GamingMode() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div className="flex flex-col h-screen gap-4 pt-0 p-5 overflow-hidden">
      <div className='flex gap-5 justify-start items-center'>
        {selectedLevel === null ? <h1 className="text-xl text-white tracking-widest">Levels</h1> : ''}
        {selectedLevel !== null ? <button onClick={() => setSelectedLevel(null)} className='border-2 border-cyan-400 text-white p-2 px-5 rounded-md shadow-lg cursor-pointer font-thin tracking-widest hover:bg-cyan-400 hover:shadow-cyan-900 transition-all text-xs'>back to levels</button> : ''}
      </div>

      {/* Show Levels List if no level is selected */}
      {!selectedLevel ? (
        <div className="flex flex-col gap-3 p-2 overflow-y-scroll h-[90%] custom-scrollbar">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <div
              key={el}
              className="border-2 cursor-pointer hover:bg-pink-400 transition-all hover:shadow-pink-900 shadow-lg border-pink-400 p-3 w-full rounded-lg"
              onClick={() => setSelectedLevel(el)} // Set selected level on click
            >
              <p className="text-white tracking-widest">Level {el}</p>
            </div>
          ))}
        </div>
      ) : (
        // Show Simulation Component when a level is selected
        <Simulation level={selectedLevel} onBack={() => setSelectedLevel(null)} />
      )}
    </div>
  );
}
