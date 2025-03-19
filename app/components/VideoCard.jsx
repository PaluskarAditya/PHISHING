import React from 'react'

export default function VideoCard() {
  return (
    <div className="bg-pink-400 flex flex-col">
      <img src="/pfp.jpg" alt="thumbnail" />
      <div className="flex gap-2">
        <div className="flex flex-col gap-1 p-2">
          <p className="font-bold">Certified Ethical Hacker</p>
          <p className="text-xs">this course has everythings to become hacker</p>
        </div>
        <div className="flex justify-center items-center p-2">
          <button className="bg-black text-white p-2 px-3 text-xs">view</button>
        </div>
      </div>
    </div>
  )
}
