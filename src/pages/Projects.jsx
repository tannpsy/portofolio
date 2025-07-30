import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import projects from '../data/projects.json';
import RevealOnScroll from '../components/RevealOnScroll';

const images = import.meta.glob('/src/assets/projects/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
});

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center px-4 py-12 bg-[#FFFFFF]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4C5B5C]">
        Projects
      </h2>

      <div className="flex flex-col gap-8 max-w-5xl w-full">
        {displayedProjects.map((project) => {
          const imageSrc = images[`/src/assets/projects/${project.image}`];

          return (
            <RevealOnScroll key={project.id}>
              <div className="flex flex-col md:flex-row bg-[#FFFFFF] border border-[#4C5B5C] rounded-2xl shadow-[0_0_15px_rgba(76,91,92,0.1)] hover:shadow-[0_0_20px_rgba(0,151,167,0.2)] transition overflow-hidden">
                <div className="relative md:w-1/3 w-full h-64 md:h-auto overflow-hidden group">
                  {imageSrc ? (
                    <>
                      <img
                        src={imageSrc}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                      Image not found
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between p-6 md:w-2/3">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#4C5B5C]">{project.title}</h3>
                    <p className="text-[#4C5B5C] text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-[#0097A7] text-white text-xs px-2 py-1 rounded-full shadow-[0_0_5px_rgba(0,151,167,0.3)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0097A7] hover:text-[#4C5B5C] transition text-xl"
                        aria-label="View on GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.docs && (
                      <a
                        href={project.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-[#0097A7] text-white rounded-full text-xs hover:bg-[#4C5B5C] transition shadow-[0_0_5px_rgba(0,151,167,0.3)]"
                      >
                        Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      {!showAll && projects.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 px-8 py-3 bg-[#0097A7] text-[#0097A7] rounded-full hover:bg-[#4C5B5C] transition shadow-[0_0_10px_rgba(0,151,167,0.3)]"
        >
          See More
        </button>
      )}
    </section>
  );
};

export default Projects;
