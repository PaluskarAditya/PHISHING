"use client";

import { useState } from "react";
import GamingMode from "../components/GamingMode";
import EducationMode from "../components/EducationMode";

export default function Page() {
  const [mode, setMode] = useState("education"); // Default mode

  return (
    <div className="h-screen bg-gray-900 flex flex-col gap-0">
      <div className="flex justify-between items-center p-5">
        {/* Title */}
        <h1 className="text-cyan-400 text-2xl font-normal tracking-widest">
          {mode === "gaming" ? "Gaming Mode" : "Education Mode"}
        </h1>

        {/* Toggle Switch */}
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs tracking-widest">Education</span>

          <div
            className={`relative w-12 h-6 bg-gray-700 rounded-full cursor-pointer transition-all 
                ${mode === "gaming" ? "bg-cyan-400" : "bg-pink-400"}`}
            onClick={() => setMode(mode === "gaming" ? "education" : "gaming")}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 
                  ${mode === "gaming" ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </div>

          <span className="text-gray-400 text-xs tracking-widest">Gaming</span>
        </div>

      </div>
      {
        mode === 'gaming' ? <GamingMode /> : <EducationMode />
      }
    </div>
  );
}


