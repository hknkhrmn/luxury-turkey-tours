import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '500+', label: 'Elite Travelers' },
  { value: '12', label: 'Years of Excellence' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Concierge Support' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 px-6 bg-primary" ref={ref}>
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div
            className="transition-all duration-700"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-40px)' }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title text-white mb-6">
              Crafting <em className="text-accent">Unforgettable</em>
              <br />Turkish Journeys
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-text-secondary text-sm leading-loose mb-6">
              Founded by passionate travelers and hospitality experts, Luxury Turkey Tours was born from a single conviction: Turkey deserves to be experienced the way it truly is — in breathtaking, unhurried luxury.
            </p>
            <p className="font-body text-text-secondary text-sm leading-loose mb-10">
              We specialize exclusively in crafting bespoke journeys for American travelers who seek more than ordinary tourism. From private after-hours access to Hagia Sophia to candlelit dinners in ancient cisterns, we unlock Turkey's most extraordinary moments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-accent/30 pl-5">
                  <p className="font-heading text-3xl text-accent">{s.value}</p>
                  <p className="font-body text-xs text-text-secondary tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            className="relative transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '0.2s',
            }}
          >
            {/* Main image */}
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&q=80"
                alt="Bosphorus Istanbul"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/20 z-0" />
            {/* Gold badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent p-6 z-20">
              <p className="font-heading text-primary text-3xl font-semibold">12</p>
              <p className="font-body text-primary text-xs tracking-wider uppercase">Years of<br />Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
