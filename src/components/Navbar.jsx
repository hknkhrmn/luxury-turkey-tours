import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Experiences', 'Destinations', 'Services', 'Gallery', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-primary/95 backdrop-blur-md border-b border-white/5' : 'py-6'
      }`}
    >
      <div className="max-w-layout mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-accent/60 flex items-center justify-center group-hover:border-accent transition-colors">
            <span className="font-heading text-accent text-lg">L</span>
          </div>
          <div>
            <p className="font-heading text-white text-sm leading-none tracking-wide">Luxury Turkey</p>
            <p className="font-body text-accent text-[9px] tracking-[0.3em] uppercase">Tours</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs tracking-widest text-white/70 uppercase hover:text-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="font-body text-xs text-text-secondary tracking-wider">USD</span>
          <a href="#contact" className="btn-gold-filled text-xs py-2 px-5">
            Plan My Trip
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary/98 border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm tracking-widest text-white/70 uppercase hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-gold-filled text-center mt-2">Plan My Trip</a>
        </div>
      )}
    </nav>
  );
}
