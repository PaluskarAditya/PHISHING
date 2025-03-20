import React, { useState } from 'react';
import EducationSidebar from './EducationSidebar';
import Video from './Video';
import Blog from './Blog';
import Profile from './Profile';

// Education Mode Component
export default function EducationMode() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="border-0 h-full flex gap-3 border-cyan-400">
      <EducationSidebar setActiveTab={setActiveTab} />
      <div className="flex-1 rounded-md shadow-lg text-white">
        {activeTab === 'video' && <Video />}
        {activeTab === 'blog' && <Blog />}
        {activeTab === 'profile' && <Profile />}
      </div>
    </div>
  );
}
