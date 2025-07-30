import { useState } from "react";
import { Icon } from "@iconify/react";
import skillsData from "../data/skills.json";
import RevealOnScroll from "../components/RevealOnScroll";

const Skills = () => {
  const [selectedSection, setSelectedSection] = useState(skillsData[0]);

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-white"
    >
      <div className="w-full max-w-4xl border-4 border-[#0097A7] rounded-2xl p-6 md:p-10 shadow-[0_0_20px_rgba(108,99,255,0.2)] bg-white">
        
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#4C5B5C] text-center">
            Skills
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skillsData.map((section) => (
              <button
                key={section.title}
                onClick={() => setSelectedSection(section)}
                className={`px-4 py-2 rounded-full border transition duration-300 text-sm md:text-base shadow-[0_0_10px_rgba(108,99,255,0.2)] ${
                  selectedSection.title === section.title
                    ? "bg-[#6C63FF] text-[#4C5B5C] border-[#0097A7]"
                    : "bg-transparent text-[#0097A7] border-[#0097A7] hover:bg-[#0097A7] hover:text-white"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          {selectedSection.skills ? (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-4">
              {selectedSection.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <Icon icon={skill.icon} width="48" height="48" color="#6C63FF" />
                  <p className="mt-2 text-sm md:text-base text-center text-[#4C5B5C]">{skill.name}</p>
                </div>
              ))}
            </div>
          ) : selectedSection.subsections ? (
            <div className="flex flex-col gap-8 mt-4 max-w-3xl w-full">
              {selectedSection.subsections.map((sub) => (
                <div key={sub.subtitle}>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#0097A7]">
                    {sub.subtitle}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {sub.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-4 py-2 rounded-full border border-[#0097A7] text-[#4C5B5C] text-sm shadow-[0_0_5px_rgba(108,99,255,0.2)]"
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-500">No data available.</p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;
