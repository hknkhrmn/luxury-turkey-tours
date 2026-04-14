import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video / image fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=90"
          alt="Istanbul"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'slowZoom 20s ease infinite alternate' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary" />
        {/* Side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Pre-headline */}
        <p className="section-label" style={{ transitionDelay: '0.2s' }}>
          ✦ For Elite American Travelers ✦
        </p>

        {/* Main headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-none mb-6">
          Experience Turkey
          <br />
          <em className="text-accent">in Ultimate Luxury</em>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-accent/50" />
          <span className="text-accent text-xs">✦</span>
          <div className="w-12 h-px bg-accent/50" />
        </div>

        {/* Subtext */}
        <p className="font-body text-white/70 text-lg md:text-xl tracking-wide mb-12 max-w-xl mx-auto">
          Tailored journeys crafted exclusively for discerning travelers seeking the extraordinary.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#experiences" className="btn-gold-outline">
            Explore Tours
          </a>
          <a href="#customtrip" className="btn-gold-filled">
            Plan My Trip
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#whyus"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-white uppercase">Scroll</span>
        <ChevronDown size={16} className="text-accent animate-bounce" />
      </a>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
}
