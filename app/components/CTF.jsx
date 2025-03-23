import React from 'react'

export default function CTF({ scenarios, setSelectedScenario }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 overflow-y-scroll h-[90%] custom-scrollbar">
      {scenarios.map((scenario) => (
        <div
          key={scenario.id}
          className="border-2 cursor-pointer hover:bg-pink-400 transition-all hover:shadow-pink-900 shadow-lg border-pink-400 p-3 w-full rounded-lg text-white text-center"
          onClick={() => setSelectedScenario(scenario)}
        >
          {scenario.name}
        </div>
      ))}
    </div>
  )
}
