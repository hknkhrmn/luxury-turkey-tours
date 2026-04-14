import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const interests = ['Historical Sites', 'Yacht & Sea', 'Fine Dining', 'Hot Air Balloon', 'Shopping', 'Wellness & Spa', 'Adventure'];

export default function CustomTrip() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ people: '', days: '', interests: [] });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (item) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(item)
        ? f.interests.filter((i) => i !== item)
        : [...f.interests, item],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="customtrip" className="relative py-28 overflow-hidden" ref={ref}>
      {/* BG image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1600&q=80"
          alt="bg"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(4px) brightness(0.3)' }}
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 max-w-layout mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-10 transition-all duration-700"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <p className="section-label">Personalized Journey</p>
            <h2 className="section-title text-white">
              Design Your <em className="text-accent">Dream Trip</em>
            </h2>
            <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">
              Tell us your vision and our luxury concierge team will craft a bespoke itinerary just for you.
            </p>
          </div>

          {/* Glass form */}
          <div
            className="glass-card p-8 md:p-12 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0.2s',
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 border border-accent/50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="font-heading text-2xl text-white mb-2">Request Received</h3>
                <p className="font-body text-sm text-text-secondary">Our concierge will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs tracking-widest text-accent uppercase">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 4"
                      value={form.people}
                      onChange={(e) => setForm({ ...form, people: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/30"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs tracking-widest text-accent uppercase">
                      Number of Days
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 10"
                      value={form.days}
                      onChange={(e) => setForm({ ...form, days: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/30"
                      required
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-3">
                  <label className="font-body text-xs tracking-widest text-accent uppercase">
                    Your Interests
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleInterest(item)}
                        className={`font-body text-xs tracking-wider px-4 py-2 border transition-all duration-200 ${
                          form.interests.includes(item)
                            ? 'bg-accent text-primary border-accent'
                            : 'border-white/20 text-white/60 hover:border-accent/50 hover:text-white'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-gold-filled w-full text-center mt-2">
                  Design My Journey
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
