import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { destinations } from '../data/siteData';

export default function Destinations() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="destinations" className="py-28 px-6 bg-primary" ref={ref}>
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">Discover Turkey</p>
          <h2 className="section-title text-white">
            Iconic <em className="text-accent">Destinations</em>
          </h2>
        </div>

        {/* Main slider image */}
        <div
          className="relative h-[60vh] overflow-hidden mb-6 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-10 left-10">
                <h3 className="font-heading text-5xl text-white mb-2">{dest.name}</h3>
                <p className="font-body text-sm text-accent tracking-widest uppercase">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Destination tabs */}
        <div className="grid grid-cols-4 gap-2">
          {destinations.map((dest, i) => (
            <button
              key={dest.name}
              onClick={() => setActive(i)}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 transition-all duration-300 flex items-end p-3 ${
                  i === active ? 'bg-accent/20' : 'bg-primary/60 group-hover:bg-primary/40'
                }`}
              >
                {i === active && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
                )}
                <span className="font-heading text-sm text-white">{dest.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
