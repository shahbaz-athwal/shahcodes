import React from "react";

const experiences = [
  {
    role: "Teaching Assitant",
    company: "Acadia University",
    duration: "Jan 2023 - Current",
    current: true,
    description: [
      "Led the development of key software products, driving innovation and setting technical direction.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Mentored junior developers and contributed to a culture of continuous learning and improvement.",
    ],
  },
  {
    role: "ICPC Programming Competition",
    company: "",
    duration: "Nov 2023",
    current: false,
    description: [
      "lorem10",
      "Optimized application for maximum speed and scalability.",
      "Participated in code reviews and maintained high coding standards.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="pt-8">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, odio optio fugiat placeat quisquam illum minus, quos obcaecati voluptas quis similique id deserunt! Dolorum, rerum!
      </p>
      
      <h2 className="text-lg font-semibold mt-14">Education</h2>
      <div className="mt-4 space-y-4 ml-2">
        <div className="flex flex-col">
          <div className="flex items-center space-x-4">
            <div
              className={"w-3 h-1 rounded-full dark:bg-gray-300 bg-zinc-600"}
            ></div>
            <div>
              <h3 className="flex text-md font-medium">
                Bachelor of Computer Science
                <div className="text-xs pt-1 pl-3">( Sept 2022- May 2026 )</div>
              </h3>
              <p className="text-sm dark:text-gray-300">Acadia University</p>
            </div>
            
          </div>
          <ul className="list-disc ml-12 mt-2 text-sm">
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam blanditiis facilis dignissimos!</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia eos cupiditate laborum animi eaque!</li>
          </ul>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-14">Experience</h2>
      <div className="mt-4 space-y-4 ml-2">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center space-x-4">
              <div
                className={"w-3 h-1 rounded-full dark:bg-gray-300 bg-zinc-600"}
              ></div>
              <div>
                <h3 className="text-md font-medium">{experience.role}</h3>
                <p className="text-sm dark:text-gray-300">
                  {experience.company} ({experience.duration})
                </p>
              </div>
              {experience.current && (
                <span className="text-xs border border-gray-300 px-2 py-0.5 rounded-full">
                  PRESENT
                </span>
              )}
            </div>
            <ul className="list-disc ml-12 mt-2 text-sm">
              {experience.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
