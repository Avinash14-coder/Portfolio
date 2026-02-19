import React from "react";
import { FaJava, FaPython, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "Java", level: "80%", icon: <FaJava className="text-red-500" /> },
  { name: "Python", level: "85%", icon: <FaPython className="text-yellow-400" /> },
  { name: "C++", level: "75%", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "React.js", level: "90%", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: "80%", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", level: "75%", icon: <SiMongodb className="text-green-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#050209]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          My <span className="text-pink-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-xl font-medium text-gray-200">{skill.name}</span>
                </div>
                <span className="text-purple-400 font-bold">{skill.level}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
                    style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;