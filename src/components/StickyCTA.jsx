import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-600 hover:bg-green-500 transition-colors rounded-full shadow-lg shadow-green-900/40 group relative"
      >
        <MessageCircle size={20} className="text-white" />
        <span className="absolute right-14 bg-primary border border-white/10 text-white text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
      </a>

      {/* Plan trip CTA */}
      <a
        href="#customtrip"
        className="w-12 h-12 bg-accent hover:bg-accent-light transition-colors flex items-center justify-center shadow-lg shadow-accent/20 group relative"
      >
        <span className="font-heading text-primary text-lg font-semibold">✦</span>
        <span className="absolute right-14 bg-primary border border-white/10 text-white text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Plan My Trip
        </span>
      </a>
    </div>
  );
}
