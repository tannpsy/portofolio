import RevealOnScroll from '../components/RevealOnScroll';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <section id="education" className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4C5B5C]">
        Education
      </h2>

      <div className="relative max-w-3xl w-full">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#0097A7]"></div>

        <div className="flex flex-col gap-12">
          {educationData.map((edu) => (
            <RevealOnScroll key={edu.id}>
              <div className="flex items-start relative">
                <div className="flex flex-col items-center mr-6 z-10">
                  <div className="bg-[#0097A7] text-white text-lg md:text-l font-semibold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(108,99,255,0.4)] text-center">
                    {edu.period}
                  </div>
                  <div className="flex-1 w-px bg-[#0097A7] mt-2"></div>
                </div>
                <div className="bg-white border-l-4 border-[#0097A7] rounded-r-xl shadow-[0_0_15px_rgba(108,99,255,0.2)] hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-shadow duration-300 p-6 w-full min-h-[220px] flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#4C5B5C]">
                    {edu.level} - {edu.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#0097A7] mt-1">{edu.location}</p>
                  <p className="text-sm md:text-base text-[#4C5B5C] mt-1 font-medium">
                    GPA: {edu.gpa}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm md:text-base text-[#4C5B5C] space-y-1">
                    {edu.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
