"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          router.push("/home"); // Redirect to /home
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="h-screen bg-gray-900 flex gap-5 flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-cyan-400 text-6xl font-normal tracking-widest">
        Cyber Gaurd
      </h1>

      {/* Loading Bar Container */}
      <div className="w-96 h-4 mt-8 bg-gray-800 border-2 border-cyan-500 rounded-full overflow-hidden">
        {/* Animated Bar */}
        <div
          className="h-full bg-cyan-400 transition-all duration-100 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="text-gray-400 mt-3 text-lg font-mono">
        Loading... {progress}%
      </p>
    </div>
  );
}
