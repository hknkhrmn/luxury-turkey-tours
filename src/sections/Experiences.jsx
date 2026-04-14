import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/siteData';

export default function Experiences() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section id="experiences" className="py-28 bg-[#080B14]" ref={ref}>
      <div className="max-w-layout mx-auto px-6">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div>
            <p className="section-label">Curated For You</p>
            <h2 className="section-title text-white">
              Signature <em className="text-accent">Experiences</em>
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'max(1.5rem, calc((100vw - 1320px)/2 + 1.5rem))',
          paddingRight: 'max(1.5rem, calc((100vw - 1320px)/2 + 1.5rem))',
        }}
      >
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.6s ease ${i * 0.1}s`,
            }}
          >
            {/* Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              {/* Tag */}
              <span className="absolute top-4 left-4 font-body text-[10px] tracking-[0.2em] text-accent bg-primary/60 px-3 py-1 uppercase">
                {exp.tag}
              </span>
              {/* Content reveal on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-xl text-white mb-2">{exp.title}</h3>
                <p className="font-body text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.desc}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <a href="#contact" className="font-body text-xs text-accent tracking-widest uppercase hover:text-accent-light">
                    Inquire Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
