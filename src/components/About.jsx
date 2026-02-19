import React from "react";
import { FaGraduationCap, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#050209]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Using standard flex layout to guarantee mobile order */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* TOP on Mobile, LEFT on Desktop: Image Area */}
          <div className="flex-1 w-full relative flex justify-center mb-4 md:mb-0">
             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-[60px] md:blur-[80px] opacity-40"></div>
             
             {/* Profile Image (Matched Hero mobile size: w-56 h-56) */}
             <img 
              src="/assets/profile.png" 
              alt="Avinash Profile" 
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl z-10"
             />
          </div>

          {/* BOTTOM on Mobile, RIGHT on Desktop: Content Area */}
          <div className="flex-1 w-full space-y-8">
            <div className="bg-[#1a0b2e]/60 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">I'm Avinash Pawar</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Software Engineering student at PCCOE, Pune. I am passionate about bridging data, AI, and web technologies. 
                  My expertise lies in building full-stack applications and integrating them with intelligent systems.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/50 transition">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><FaGraduationCap size={20} className="md:w-6 md:h-6" /></div>
                    <div>
                        <h4 className="text-white font-semibold text-sm md:text-base">Education</h4>
                        <p className="text-xs md:text-sm text-gray-400">B.Tech in CS (AI & ML) - 2028</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-pink-500/50 transition">
                    <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400"><FaCode size={20} className="md:w-6 md:h-6" /></div>
                    <div>
                        <h4 className="text-white font-semibold text-sm md:text-base">Problem Solving</h4>
                        <p className="text-xs md:text-sm text-gray-400">DSA & Algorithmic Logic</p>
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