import React from 'react';
import { projects, images } from '../data/mock';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-gray-500 uppercase tracking-wide text-sm font-medium">Our Portfolio</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-green">
            Our Latest Completed Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={images.projects[project.image]}
                alt={project.title}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                  index === 0 ? 'h-[500px] md:h-full' : 'h-[280px]'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-dark-green text-lg mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-lime-100 text-primary px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
