import React from 'react';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-[#050209] to-[#050209]">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]"></div>

      {/* Changed to flex-col-reverse to GUARANTEE Image is on top on mobile */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Left on Desktop, BOTTOM on Mobile: Text Content */}
        <div className="flex-1 w-full space-y-6 text-center md:text-left mt-8 md:mt-0">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-2 md:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-semibold text-sm md:text-base">
              Full Stack Developer (AIML & IoT)
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
              Avinash Pawar
            </span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Building intelligent, scalable web applications and data-driven solutions. 
            Bridging the gap between <span className="text-white font-medium">IoT hardware</span> and <span className="text-white font-medium">modern web interfaces</span>.
          </p>
          
          {/* Main Action Buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-2 md:pt-4">
            <a href="#projects" className="px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="/resume.pdf" download="Avinash_Pawar_Resume.pdf" className="px-6 md:px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition backdrop-blur-md">
              Download CV
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 justify-center md:justify-start pt-4 md:pt-6">
            <a href="https://github.com/Avinash14-coder" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#1a0b2e] border border-white/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)]">
                <FaGithub className="text-xl md:text-2xl text-gray-400 group-hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/avinash-pawar-0a19b5347/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#1a0b2e] border border-white/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:shadow-[0_10px_25px_rgba(10,102,194,0.5)]">
                <FaLinkedin className="text-xl md:text-2xl text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/heyitsavinash?igsh=M3oyNGphcWRhOTRw" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#1a0b2e] border border-white/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_10px_25px_rgba(225,48,108,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaInstagram className="text-xl md:text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
            </a>
          </div>
        </div>

        {/* Right on Desktop, TOP on Mobile: Image */}
        <div className="flex-1 w-full relative flex justify-center items-center">
          {/* Glowing Ring (Shrunk slightly for mobile) */}
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-purple-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/5 blur-3xl"></div>

          {/* Profile Image (Shrunk to w-56 h-56 for mobile so it fits perfectly) */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
            <img src="/assets/profile.png" alt="Avinash" className="w-full h-full object-cover" />
          </div>

          {/* Orbiting Icons */}
          <div className="absolute top-0 animate-float bg-[#1a0b2e] p-2 md:p-3 rounded-xl border border-white/10 shadow-xl">
            <FaReact className="text-3xl md:text-4xl text-blue-400" />
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 animate-float animation-delay-2000 bg-[#1a0b2e] p-2 md:p-3 rounded-xl border border-white/10 shadow-xl">
            <FaNodeJs className="text-3xl md:text-4xl text-green-500" />
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 animate-float animation-delay-1000 bg-[#1a0b2e] p-2 md:p-3 rounded-xl border border-white/10 shadow-xl">
            <SiTailwindcss className="text-3xl md:text-4xl text-cyan-400" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;