"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 2);
      }, 100);
    } else {
      clearInterval(interval);
      setTimeout(() => router.push("/home"), 500); // ✅ Ensure router update happens safely
    }

    return () => clearInterval(interval);
  }, [progress, router]); // ✅ Run effect only when `progress` changes

  return (
    <div className="h-screen bg-gray-900 flex gap-5 flex-col justify-center items-center">
      <h1 className="text-cyan-400 text-6xl font-normal tracking-widest">
        Cyber Guard
      </h1>

      <div className="w-96 h-4 mt-8 bg-gray-800 border-2 border-cyan-500 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all duration-100 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-gray-400 mt-3 text-lg font-mono">
        Loading... {progress}%
      </p>
    </div>
  );
}
