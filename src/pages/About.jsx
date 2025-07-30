import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilePhoto from '../assets/profile.png';
import activity1 from '../assets/carousel/activity1.jpg';
import activity2 from '../assets/carousel/activity2.jpg';
import activity3 from '../assets/carousel/activity3.jpg';
import activity4 from '../assets/carousel/activity4.jpg';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col justify-center items-center gap-8 md:gap-10 px-4 md:px-10 py-10 md:py-20 bg-white"
    >
      <RevealOnScroll>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-20">
          <div
            className="w-full md:w-1/3 flex justify-center md:justify-end relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-64 sm:w-72 md:w-72 h-110 bg-transparent border-4 border-[#4C5B5C] rounded-2xl shadow-[0_0_20px_rgba(76,91,92,0.3)] flex flex-col items-center justify-start relative overflow-visible mr-0 md:mr-10 mt-40 transition-transform duration-300 hover:scale-105">
              <img
                src={profilePhoto}
                alt="Profile"
                className={`object-center absolute transform w-70 h-90 sm:w-60 sm:h-60 md:w-70 md:h-70 object-contain transition duration-300 ${
                  isHovered ? "scale-110 -translate-y-2" : "scale-100"
                } z-10`}
              />
              <span className="mt-[5rem] sm:mt-[16rem] md:mt-[18rem] text-[#4C5B5C] font-semibold text-lg text-center">
                Intan Kumala Pasya
              </span>
              <span className="text-[#0097A7] text-sm text-center">President University</span>

              <div className="absolute -bottom-12 w-72 sm:w-80 md:w-80 bg-[#6C63FF]/10 backdrop-blur-md border border-[#0097A7] rounded-xl shadow-[0_0_15px_rgba(108,99,255,0.2)] p-4 mx-auto">
                <p className="text-sm md:text-base text-[#4C5B5C] italic text-center">
                  "Small consistent efforts today will build your future tomorrow. Believe in your journey and keep learning."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start mt-0 md:mt-[3rem] px-4 md:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 mt-10 text-[#4C5B5C] text-center md:text-left">
              About Me
            </h2>
            <p className="max-w-l text-sm sm:text-base md:text-lg text-[#4C5B5C] mb-4 text-justify mt-15">
              I am an Informatics student at President University with a concentration in Artificial Intelligence, currently maintaining a GPA of 3.87. I’m passionate about using AI to solve real-world problems, and I hope to contribute to technology that brings positive change to society. I love working on projects involving machine learning, computer vision, and natural language processing, and I am committed to continuous learning to improve my skills in software development and AI.
            </p>
            <p className="max-w-l text-sm sm:text-base md:text-lg text-[#4C5B5C] mb-8 text-justify">
              Outside of studying, I enjoy exploring cozy coffee shops, journaling, and listening to music while coding to keep my mind clear and motivated. One of my dreams is to create AI tools that can support people in their daily lives, especially in education and mental health, so technology becomes a friend, not a barrier. I believe that small, consistent efforts today will build something meaningful for tomorrow, and as long as I keep learning and growing, I hope I can contribute positively, not only as a developer but also as someone who wants to make a difference through technology.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="w-full flex justify-center mt-6 md:mt-20">
          <div className="w-full max-w-xl">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              dynamicHeight={false}
              className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(108,99,255,0.2)] border-4 border-[#0097A7]"
            >
              <div>
                <img src={activity1} alt="Activity 1" />
                <p className="legend bg-[#0097A7]/80 text-white">Organization Event</p>
              </div>
              <div>
                <img src={activity2} alt="Activity 2" />
                <p className="legend bg-[#0097A7]/80 text-white">Project Manager</p>
              </div>
              <div>
                <img src={activity3} alt="Activity 3" />
                <p className="legend bg-[#0097A7]/80 text-white">Volunteer</p>
              </div>
              <div>
                <img src={activity4} alt="Activity 4" />
                <p className="legend bg-[#0097A7]/80 text-white">Volunteer</p>
              </div>
            </Carousel>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
