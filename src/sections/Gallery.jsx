import { useScrollReveal } from '../hooks/useScrollReveal';
import { galleryImages } from '../data/siteData';

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-28 px-6 bg-primary" ref={ref}>
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">Visual Journey</p>
          <h2 className="section-title text-white">
            Turkey Through Our <em className="text-accent">Lens</em>
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  img.tall ? 'h-80 md:h-96' : 'h-52 md:h-64'
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                <span className="font-heading italic text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wider">
                  {img.alt}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
