import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Powered Heart Disease Analysis",
    category: "HealthTech & Machine Learning",
    image: "/assets/HeartDisease.png",
    demoLink: "https://ai-powered-heart-disease-analysis-zptnyncw3ewir3thxugw9q.streamlit.app/",
    repoLink: "https://github.com/Avinash14-coder/AI-Powered-Heart-disease-Analysis.git",
    status: "Active"
  },
  {
    title: "Eventra Marketplace",
    category: "Full Stack Web App",
    image: "/assets/eventra-hero.jpg",
    demoLink: "https://event-planner-one-omega.vercel.app/",
    repoLink: "https://github.com/Avinash14-coder/Event-planner.git",
    status: "Active"
  },
  {
    title: "PhishGuard Security",
    category: "Cybersecurity ML",
    image: "/assets/phishguard-dash.png",
    demoLink: "#",
    repoLink: "https://github.com/Avinash14-coder/Phishguard.git",
    status: "In Development"
  },
  {
    title: "J.A.R.V.I.S Voice Assistant",
    category: "AI & Automation",
    image: "/assets/jarvis-ui.jpg",
    demoLink: "#",
    repoLink: "https://github.com/Mayank50001/FinalProject.git",
    status: "In Development"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#050209]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-purple-500">Projects</span></h2>
            <div className="flex gap-2">
                <span className="px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm border border-purple-500/30">Data Analytics</span>
                <span className="px-4 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm border border-pink-500/30">Web Dev</span>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a0b2e] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition group flex flex-col shadow-lg">
              
              {/* Image Area */}
              <div className="h-48 overflow-hidden relative shrink-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-medium tracking-wider">View Project</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                
                {/* Category & Status Badge */}
                <div className="flex justify-between items-start mb-3">
                  <p className="text-sm text-purple-400 font-medium">{project.category}</p>
                  
                  {/* Dynamic Status Badge */}
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    project.status === 'In Development' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                    'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 flex-grow">{project.title}</h3>
                
                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full border border-purple-500 text-purple-400 text-center text-[13px] font-bold hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2">
                        <FiGithub size={16} /> Repo
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center text-[13px] font-bold hover:opacity-90 hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center justify-center gap-2">
                        <FiExternalLink size={16} /> Demo
                    </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;