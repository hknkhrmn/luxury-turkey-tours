import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000);  //The loader hiding animation starts and disappears after two seconds.
    const remove = setTimeout(() => setMounted(false), 2800); //The loader is completely removed from the DOM after 2.8 seconds.
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []); //   The fade-out animation starts in 2000ms.
// The fade-out animation lasts approximately 0.5-0.8 seconds.
// Removing it from the DOM after the animation finishes provides a cleaner transition.

  if (!mounted) return null;

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo mark */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border border-accent opacity-20 rounded-full animate-ping" />
          <div className="absolute inset-2 border border-accent opacity-40 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-accent text-2xl">L</span>
          </div>
        </div>
        <p className="font-body text-xs tracking-[0.4em] text-text-secondary uppercase">
          Luxury Turkey Tours
        </p>
        {/* Progress bar */}
        <div className="w-32 h-px bg-white/10 overflow-hidden">
          <div
            className="h-full bg-accent"
            style={{ animation: 'loadProgress 1.8s ease forwards' }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loadProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
