import { Diamond, Mic, Package, Headphones } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { whyUs } from '../data/siteData';

const iconMap = {
  diamond: Diamond,
  mic: Mic,
  package: Package,
  headphones: Headphones,
};

export default function WhyUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="whyus" className="py-28 px-6 bg-primary" ref={ref}>
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title text-white">
            The Standard of <em className="text-accent">Unrivaled</em> Service
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-accent text-xs">✦</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group p-8 border border-white/5 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 cursor-default"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                <div className="w-12 h-12 border border-accent/30 group-hover:border-accent flex items-center justify-center mb-6 transition-all">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-heading text-xl text-white mb-3">{item.title}</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
