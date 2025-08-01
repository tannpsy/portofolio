import { FiGithub, FiLinkedin, FiDownload, FiMail } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import RevealOnScroll from '../components/RevealOnScroll';
import profilePhoto from '../assets/profile.png';
import cvFile from '../assets/IntanKumalaPasya_CV.pdf';

export default function LandingPage() {
  return (
    <section
      id="landing-page"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-white"
    >
      <RevealOnScroll>
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-8 py-10 overflow-hidden bg-white">
          <div className="w-full md:w-3/5 text-center md:text-left px-4 md:pl-20 mt-20 md:mt-40">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#4C5B5C] to-[#0097A7] bg-clip-text text-transparent">
              Hello, I'm Intan Kumala Pasya
            </h1>
            <p className="text-lg md:text-xl text-[#4C5B5C] mb-6 max-w-xl">
              Informatics student from <span className="font-semibold text-[#4C5B5C]">Indonesia</span>, passionate about AI and creating tech that brings real impact. Let’s build the future, one line of code at a time!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
              <a
                href="https://github.com/tannpsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4C5B5C] hover:text-[#6C63FF] text-2xl transition"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/intan-kumala-pasya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4C5B5C] hover:text-[#6C63FF] text-2xl transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://discord.com/users/kidztannia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4C5B5C] hover:text-[#6C63FF] text-2xl transition"
                aria-label="Discord"
              >
                <SiDiscord />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <a
                href={cvFile}
                download="CV_Intan-Kumala-Pasya.pdf"
                className="flex items-center gap- border border-[#4C5B5C] text-[#4C5B5C] hover:bg-[#6C63FF] hover:text-white font-medium px-4 py-2 rounded transition"
              >
                <FiDownload className="text-lg" />
                Download CV
              </a>
              <a
                href="mailto:pasyaintan@gmail.com?subject=Hiring Inquiry from [Your Company Name]&body=Hi Intan, I would like to discuss an opportunity with you."
                className="flex items-center gap bg-[#4C5B5C] hover:bg-[#6C63FF] text-white font-medium px-4 py-2 rounded transition"
              >
                <FiMail className="text-lg" />
                Hire Me
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0 md:mr-10">
            <img
              src={profilePhoto}
              alt="Intan Kumala Pasya"
              className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto object-contain rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
