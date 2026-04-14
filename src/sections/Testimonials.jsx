import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-28 px-6 bg-[#080B14]" ref={ref}>
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">Client Stories</p>
          <h2 className="section-title text-white">
            Words From Our <em className="text-accent">Guests</em>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="max-w-3xl mx-auto text-center transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="transition-all duration-500"
                style={{
                  opacity: i === active ? 1 : 0,
                  position: i === active ? 'relative' : 'absolute',
                  top: 0, left: 0, right: 0,
                  pointerEvents: i === active ? 'auto' : 'none',
                  transform: i === active ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {/* Quote mark */}
                <div className="font-heading text-8xl text-accent/20 leading-none mb-4">"</div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-accent fill-accent" />
                  ))}
                </div>

                <p className="font-heading text-xl md:text-2xl text-white leading-relaxed italic mb-8">
                  {t.text}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-10 bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <span className="font-heading text-accent">{t.avatar}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-body text-sm font-medium text-white">{t.name}</p>
                    <p className="font-body text-xs text-text-secondary">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors">
              <ChevronLeft size={16} className="text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${i === active ? 'w-8 h-1 bg-accent' : 'w-2 h-1 bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-white/20 hover:border-accent flex items-center justify-center transition-colors">
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
