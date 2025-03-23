import React from 'react'

export default function DeptSelection({ setDept }) {
  const depts = ["HR", "Finance", "IT Security", "Legal", "Operations"];

  return (
    <div className='bg-gray-800 p-3 flex flex-col gap-4 rounded-lg'>
      {
        depts.map(el => <div className='text-white shadow-lg cursor-pointer hover:bg-cyan-400 transition-all tracking-widest border-2 border-cyan-400 p-2 px-4 rounded-md' onClick={() => setDept(el)} key={el}>{el}</div>)
      }
    </div>
  )
}
