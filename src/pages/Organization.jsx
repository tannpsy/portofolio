import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import organizationData from '../data/organization.json';
import RevealOnScroll from '../components/RevealOnScroll';

const images = import.meta.glob('/src/assets/organization/*.{jpg,png,jpeg,webp}', { eager: true, import: 'default' });

const Organization = () => {
  return (
    <section
      id="organization"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-[#FFFFFF]"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#4C5B5C]">
        Organizational Experience
      </h2>

      <div className="w-full max-w-4xl">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={5000}
          className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(76,91,92,0.15)]"
        >
          {organizationData.map((org, index) => {
            const imageSrc = images[`/src/assets/organization/${org.image}`];
            return (
              <RevealOnScroll key={index}>
                <div className="flex flex-col items-center">
                  {/* Foto */}
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={org.title}
                      className="w-full max-h-[400px] object-cover rounded-t-xl"
                    />
                  ) : (
                    <div className="w-full max-h-[400px] flex items-center justify-center bg-neutral-200 text-neutral-400 rounded-t-xl">
                      Image not found
                    </div>
                  )}

                  <div className="w-full bg-[#FFFFFF] border-t border-[#4C5B5C] p-4 sm:p-6 text-center rounded-b-xl shadow-[0_0_10px_rgba(0,151,167,0.15)]">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#4C5B5C]">
                      {org.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#0097A7] mt-1">
                      {org.position} • {org.year}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-[#4C5B5C] mt-2">
                      {org.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Organization;
