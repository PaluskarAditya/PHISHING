import React, { useState } from "react";
import SimulationHRPayrollScam from "./SimulationHRPayrollScam"; // Import the first scenario
import DeptSelection from "./DeptSelection";
import GameHub from "./GameHub";
import CTF from "./CTF";
import Quizz from "./Quizz";
import Misson from "./Mission";

export default function GamingMode() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);

  // List of job-role-specific attack scenarios
  const scenarios = [
    { id: 1, name: "HR Payroll Scam", component: <SimulationHRPayrollScam onBack={() => setSelectedScenario(null)} /> },
    { id: 2, name: "Finance Invoice Fraud", component: <p>Coming Soon...</p> },
    { id: 3, name: "IT Help Desk Impersonation", component: <p>Coming Soon...</p> },
    { id: 4, name: "Executive Whaling Attack", component: <p>Coming Soon...</p> },
    { id: 5, name: "Social Engineering via Chat", component: <p>Coming Soon...</p> },
  ];

  return (
    <div className="flex flex-col h-screen gap-4 pt-0 p-5 overflow-hidden">
      <div className="flex gap-5 justify-start items-center">
        {selectedDept === null ? (
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white tracking-widest">Select your Department</h1>
            <pre className="text-gray-500 font-[orbitron] tracking-widest text-xs whitespace-pre-wrap">
              Hey there, Welcome to <span className="font-bold text-cyan-400">Cyber Gaurd</span>.{`\n`}
              Please select your department to proceed further.
            </pre>
          </div>
        ) :
          selectedMode === null ? (
            <div className="flex w-full justify-start items-start gap-5">
              <div className="flex flex-col">
                <h1 className="text-xl text-white tracking-widest">Select a Mode</h1>
                <p className="text-gray-500 text-md">{selectedDept}</p>
              </div>
              <button onClick={() => setSelectedDept(null)} className="text-white text-xs shadow-lg cursor-pointer hover:bg-cyan-400 transition-all tracking-widest border-2 border-cyan-400 p-2 px-4 rounded-md">back</button>
            </div>
          ) : selectedScenario === null ? (
            <div className="flex w-full justify-start items-start gap-5">
              <div className="flex flex-col">
                <h1 className="text-xl text-white tracking-widest">Select a Scenario</h1>
                <p className="text-gray-500 text-md">{selectedMode}</p>
              </div>
              <button onClick={() => setSelectedMode(null)} className="text-white text-xs shadow-lg cursor-pointer hover:bg-cyan-400 transition-all tracking-widest border-2 border-cyan-400 p-2 px-4 rounded-md">back</button>
            </div>
          ) : (
            <button
              onClick={() => setSelectedScenario(null)}
              className="border-2 border-cyan-400 text-white p-2 px-5 rounded-md shadow-lg cursor-pointer font-thin tracking-widest hover:bg-cyan-400 hover:shadow-cyan-900 transition-all text-xs"
            >
              Back to Scenarios
            </button>
          )}
      </div>

      {/* Show list of scenarios if none is selected */}
      {!selectedDept ? (
        <DeptSelection setDept={setSelectedDept} />
      ) : selectedMode === null ? (
        <GameHub setMode={setSelectedMode} />
      ) : !selectedScenario ? (
        selectedMode === 'CTF' ? (
          <CTF setSelectedScenario={setSelectedScenario} scenarios={scenarios} />
        ) : selectedMode === 'QUIZZ' ? (
          <Quizz />
        ) : <Misson />
      ) : (
        selectedScenario.component
      )}
    </div>
  );
}
