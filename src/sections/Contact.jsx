import { MessageCircle, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sub: 'Instant response',
    href: 'https://wa.me/1234567890',
    color: 'hover:border-green-500/50 hover:bg-green-500/5',
  },
  {
    icon: Mail,
    label: 'Email Us',
    sub: 'hello@luxuryturkeytours.com',
    href: 'mailto:hello@luxuryturkeytours.com',
    color: 'hover:border-accent/50 hover:bg-accent/5',
  },
  {
    icon: Phone,
    label: 'Call Us',
    sub: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'hover:border-blue-500/50 hover:bg-blue-500/5',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-36 px-6 overflow-hidden" ref={ref}>
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&q=80"
          alt="Istanbul"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/90" />
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-layout mx-auto text-center">
        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title text-white mb-4">
            Start Your Journey <em className="text-accent">Today</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6 mb-6">
            <div className="w-12 h-px bg-accent/40" />
            <span className="text-accent text-xs">✦</span>
            <div className="w-12 h-px bg-accent/40" />
          </div>
          <p className="font-body text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
            Our luxury concierge team is standing by to begin crafting your perfect Turkish escape.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-4 p-8 border border-white/10 transition-all duration-500 ${c.color}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                <div className="w-12 h-12 border border-white/20 group-hover:border-inherit flex items-center justify-center transition-all">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-heading text-lg text-white">{c.label}</p>
                  <p className="font-body text-xs text-text-secondary mt-1">{c.sub}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
