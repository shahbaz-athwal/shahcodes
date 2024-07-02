// ExperienceSection.tsx
import React from 'react';

const experiences = [
  {
    role: 'Founding Software Engineer',
    company: 'Speedybrand (YC-W23)',
    duration: 'PRESENT',
    current: true,
  },
  {
    role: 'Front-End Engineer',
    company: 'Maya Labs (YC-S22)',
    duration: '',
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 pt-8">
      Founding Software Engineer & Designer at Speedy (YC-W23). Passionate about crafting tools that empower developers and designers to express themselves seamlessly.
      <h2 className="text-lg font-semibold mt-14">Experience</h2>
      <div className="mt-4 space-y-4 ml-4">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={'w-3 h-1 rounded-full dark:bg-gray-300 bg-zinc-600'}></div>
            <div>
              <h3 className="text-md font-medium">{experience.role}</h3>
              <p className="text-sm dark:text-gray-300 ">{experience.company}</p>
            </div>
            {experience.current && (
              <span className="text-xs border border-gray-300 px-2  py-0.5 rounded-full">PRESENT</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
