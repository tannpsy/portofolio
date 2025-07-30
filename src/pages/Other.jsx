import certifications from '../data/certifications.json';
import RevealOnScroll from '../components/RevealOnScroll';

const assets = import.meta.glob('/src/assets/certificates/*.{jpg,png,jpeg,webp,pdf}', { eager: true, import: 'default' });

const Other = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-white"
    >
      <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-[#4C5B5C]">
          Training and Certifications
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl w-full">
        {certifications.map((cert) => {
          const imageSrc = assets[`/src/assets/certificates/${cert.image}`];
          const credentialSrc =
            cert.credentialType === 'pdf'
              ? assets[`/src/assets/certificates/${cert.credential}`]
              : cert.credential;

          return (
            <RevealOnScroll key={cert.id}>
              <div
                className="bg-white border border-[#0097A7] rounded-xl shadow-[0_0_15px_rgba(58,175,169,0.15)] hover:shadow-[0_0_20px_rgba(58,175,169,0.25)] transform hover:-translate-y-1 transition duration-300 p-3 flex flex-col items-center"
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={`Certificate ${cert.id}`}
                    className="w-full h-40 object-cover rounded-lg mb-3 border border-[#0097A7] shadow-[0_0_10px_rgba(58,175,169,0.2)]"
                  />
                ) : (
                  <div className="w-full h-40 bg-neutral-200 flex items-center justify-center text-neutral-400 rounded-lg mb-3">
                    Image not found
                  </div>
                )}
                <h3 className="text-sm md:text-base font-semibold text-center text-[#4C5B5C] mb-1">
                  {cert.title}
                </h3>

                <p className="text-[#0097A7] text-xs md:text-sm mb-2">{cert.date}</p>
                <a
                  href={credentialSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0097A7] hover:text-[#2F7F7B] hover:underline text-xs md:text-sm font-medium transition"
                >
                  See credential
                </a>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default Other;
