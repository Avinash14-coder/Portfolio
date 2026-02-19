import React from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#050209]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with Glow */}
          <div className="relative flex justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-[80px] opacity-40"></div>
             <img 
              src="/assets/profile.png" 
              alt="Avinash Profile" 
              className="relative w-72 h-72 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl z-10"
             />
          </div>

          {/* Right: Content & Cards */}
          <div className="space-y-8">
            <div className="bg-[#1a0b2e]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">I'm Avinash Pawar</h3>
                <p className="text-gray-400 leading-relaxed">
                  Software Engineering student at PCCOE, Pune. I am passionate about bridging data, AI, and web technologies. 
                  My expertise lies in building full-stack applications and integrating them with intelligent systems.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><FaGraduationCap size={24} /></div>
                    <div>
                        <h4 className="text-white font-semibold">Education</h4>
                        <p className="text-sm text-gray-400">B.Tech in CS (AI & ML) - 2028</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition">
                    <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400"><FaCode size={24} /></div>
                    <div>
                        <h4 className="text-white font-semibold">Problem Solving</h4>
                        <p className="text-sm text-gray-400">DSA & Algorithmic Logic</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;