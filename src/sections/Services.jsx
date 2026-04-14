import { Car, User, Building2, Map, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { services } from '../data/siteData';

const iconMap = {
  car: Car,
  user: User,
  building: Building2,
  map: Map,
  star: Star,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-28 px-6 bg-[#080B14]" ref={ref}>
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">What We Offer</p>
          <h2 className="section-title text-white">
            Premium <em className="text-accent">Services</em>
          </h2>
          <p className="font-body text-sm text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
            Every aspect of your journey is managed with meticulous attention to detail.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.title}
                className="group relative p-8 border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden cursor-default"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}
              >
                {/* Background accent on hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/3 transition-all duration-500" />

                {/* Number */}
                <span className="absolute top-6 right-6 font-heading text-6xl text-white/5 group-hover:text-accent/10 transition-colors select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 border border-accent/30 group-hover:border-accent flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  <div className="mt-6 w-0 group-hover:w-8 h-px bg-accent transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
