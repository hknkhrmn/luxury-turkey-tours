import { Globe, Share2, Rss, Heart } from 'lucide-react';
import { useState } from 'react';

const quickLinks = ['Yacht Tours', 'Balloon Tours', 'Historical Tours', 'Fine Dining', 'Destinations', 'Services'];
const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setSubscribed(true); // To send a thank you message to the user, set State to true
    setEmail(''); // Clean input  
    setTimeout(() => setSubscribed(false), 3000); // It automatically hides the message after 3 seconds
  };

  return (
    <footer className="bg-[#060910] border-t border-white/5 pt-20 pb-8 px-6">
      <div className="max-w-layout mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-accent/60 flex items-center justify-center">
                <span className="font-heading text-accent text-lg">L</span>
              </div>
              <div>
                <p className="font-heading text-white text-sm leading-none">Luxury Turkey</p>
                <p className="font-body text-accent text-[9px] tracking-[0.3em] uppercase">Tours</p>
              </div>
            </div>
            <p className="font-body text-xs text-text-secondary leading-relaxed mb-6">
              Bespoke luxury travel experiences crafted exclusively for elite American travelers exploring Turkey.
            </p>
            <p className="font-body text-xs text-accent tracking-wider">✦ Only for US Travelers</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs text-text-secondary hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-6">Follow Us</h4>
            <div className="flex gap-3 mb-6">
            {[Globe, Share2, Rss, Heart].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 hover:border-accent flex items-center justify-center transition-all group"
                >
                  <Icon size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
            {/* Legal */}
            <h4 className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-4 mt-8">Legal</h4>
            <ul className="flex flex-col gap-2">
              {legal.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs text-text-secondary hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-xs tracking-[0.25em] text-accent uppercase mb-6">Newsletter</h4>
            <p className="font-body text-xs text-text-secondary leading-relaxed mb-6">
              Receive exclusive offers and insider travel insights for luxury Turkey experiences.
            </p>
            {subscribed ? (
              <p className="font-body text-xs text-accent">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white/5 border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/30 font-body"
                />
                <button type="submit" className="btn-gold-filled text-xs py-2.5">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-secondary">
            © 2025 Luxury Turkey Tours. All rights reserved.
          </p>
          <p className="font-body text-xs text-text-secondary">
            Crafted for <span className="text-accent">elite travelers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
