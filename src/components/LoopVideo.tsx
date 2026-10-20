import { useEffect, useRef } from 'react';
import { asset } from '../content';

interface LoopVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

/** Silent preview loop that only plays while on screen, to keep mobile data and CPU low. */
export default function LoopVideo({ src, poster, className = '' }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={asset(src)}
      poster={poster ? asset(poster) : undefined}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
